import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { entries } from '../../lib/content';
import { prompts, promptNotice } from '../../lib/content/prompts';
import PromptCards from '../../components/tools/prompt-cards';
import styles from '../../components/tools/prompts.module.css';

const titles: Record<string, string> = { notes: '博客', builds: '项目', tools: '工具' };
const categories = [['', '全部'], ['app', '小工具'], ['skill', '技能'], ['prompt', '提示词']];
export function generateStaticParams() { return Object.keys(titles).map(kind => ({ kind })); }
export async function generateMetadata({ params }: { params: Promise<{ kind: string }> }): Promise<Metadata> {
  return { title: titles[(await params).kind] ?? '未找到' };
}
export default async function Index({ params, searchParams }: {
  params: Promise<{ kind: string }>;
  searchParams: Promise<{ q?: string; topic?: string; status?: string; category?: string }>;
}) {
  const { kind } = await params;
  if (!titles[kind]) notFound();
  const { q = '', topic = '', status = '', category = '' } = await searchParams;
  const list = entries.filter(e => e.kind === kind);
  const results = list.filter(e =>
    (kind !== 'tools' || !category || ('category' in e && e.category === category)) &&
    `${e.title} ${e.summary} ${e.topic} ${e.tags.join(' ')}`.toLowerCase().includes(q.toLowerCase()) &&
    (!topic || e.topic === topic || e.tags.includes(topic)) &&
    (!status || ('status' in e && e.status === status))
  );
  const states = kind === 'builds' ? ['ACTIVE', 'TESTING', 'SHIPPED', 'PAUSED', 'FAILED'] :
    kind === 'tools' && (!category || category === 'app') ? ['LIVE', 'BETA', 'BUILDING', 'COMING_SOON', 'OPEN_SOURCE'] : [];
  const topics = [...new Set(list.flatMap(e => [e.topic, ...e.tags]))];
  const drafts = results.filter(e => 'editorialStatus' in e && e.editorialStatus === 'draft');
  const ready = results.filter(e => !('editorialStatus' in e) || e.editorialStatus !== 'draft');
  const cards = (items: typeof results) => items.map(e => <Link className="list-entry" href={`/${kind}/${e.slug}`} key={e.slug}>
    <div className="eyebrow">{e.label} / {e.topic}</div>
    <h2>{e.title} ↗</h2><p>{e.summary}</p><span className="tags">{e.tags.join(' / ')}</span>
  </Link>);
  return <section className="index">
    <span className="eyebrow">MORTY OS / {kind.toUpperCase()}</span>
    <h1>{titles[kind]}<em>.</em></h1>
    <p>{kind === 'notes' ? '来自实际迭代的文章，和仍在整理的草稿。' : kind === 'builds' ? '本站项目与开发计划，查看已完成的功能和当前状态。' : '小工具、技能与提示词，找到用途，再查看使用方式与来源。'}</p>
    {kind === 'tools' && <div className="tool-categories">{categories.map(([value, label]) =>
      <Link key={value} href={value ? `/tools?category=${value}` : '/tools'} aria-current={category === value ? 'page' : undefined}>{label}</Link>
    )}</div>}
    <form className="search" role="search">
      <label htmlFor="q">搜索标题、主题或标签</label>
      <div>
        {kind === 'tools' && <select name="category" defaultValue={category} aria-label="工具分类">
          <option value="">全部分类</option><option value="app">小工具</option><option value="skill">技能</option><option value="prompt">提示词</option>
        </select>}
        <input id="q" name="q" defaultValue={q} placeholder="输入关键词…" />
        <select name="topic" defaultValue={topic} aria-label="主题或标签"><option value="">所有主题 / 标签</option>{topics.map(t => <option key={t}>{t}</option>)}</select>
        {states.length > 0 && <select name="status" defaultValue={status} aria-label="状态"><option value="">所有状态</option>{states.map(s => <option key={s}>{s}</option>)}</select>}
        <button>搜索</button>
      </div>
    </form>
    <div aria-live="polite">
      {results.length === 0 ? <p className="empty">没有匹配的内容。<Link href={`/${kind}`}>清除筛选 ↗</Link></p> :
        kind === 'tools' && category === 'prompt' ? <>
          <p className={styles.note}><Link href="/tools/prompt-builder">把你的需求整理成提示词 ↗</Link> · 选场景、补条件，再复制使用。</p>
          <p className={styles.note}>{promptNotice}</p>
          <PromptCards entries={prompts.filter(p => results.some(e => e.slug === `prompt-${p.id}`))} detailLinks />
        </> : kind === 'notes' ? <>
          {ready.length > 0 && <div><h2 className="index-group-title">实践文章</h2>{cards(ready)}</div>}
          {drafts.length > 0 && <div className="draft-group"><h2 className="index-group-title">草稿与待补充</h2><p className="index-group-note">真实场景与记录仍在整理，点击查看当前内容及待补充部分。</p>{cards(drafts)}</div>}
        </> : cards(results)}
    </div>
  </section>;
}
