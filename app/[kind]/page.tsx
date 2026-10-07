import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { entries } from '../../lib/content';
import { prompts, promptNotice } from '../../lib/content/prompts';
import PromptCards from '../../components/tools/prompt-cards';
import styles from '../../components/tools/prompts.module.css';

const titles: Record<string, string> = { notes: '博客', builds: '项目', tools: '工具' };
const categories = [['', '全部'], ['app', '小工具'], ['skill', '技能'], ['prompt', '提示词']];
const statusLabels: Record<string, string> = { LIVE: '可使用', BETA: '测试中', BUILDING: '开发中', COMING_SOON: '待上线', OPEN_SOURCE: '开源' };
export function generateStaticParams() { return Object.keys(titles).map(kind => ({ kind })); }
export async function generateMetadata({ params }: { params: Promise<{ kind: string }> }): Promise<Metadata> {
  return { title: titles[(await params).kind] ?? '未找到' };
}
export default async function Index({ params, searchParams }: {
  params: Promise<{ kind: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { kind } = await params;
  if (!titles[kind]) notFound();
  const filters = await searchParams;
  const [q, topic, status, requestedCategory] = [filters.q, filters.topic, filters.status, filters.category].map(value => typeof value === 'string' ? value.trim() : '');
  const category = categories.some(([value]) => value === requestedCategory) ? requestedCategory : '';
  const list = entries.filter(e => e.kind === kind);
  const results = list.filter(e =>
    (kind !== 'tools' || !category || ('category' in e && e.category === category)) &&
    `${e.title} ${e.summary} ${e.topic} ${e.tags.join(' ')}`.toLowerCase().includes(q.toLowerCase()) &&
    (!topic || e.topic === topic || e.tags.includes(topic)) &&
    (!status || ('status' in e && e.status === status))
  );
  const states = kind === 'builds' ? ['ACTIVE', 'TESTING', 'SHIPPED', 'PAUSED', 'FAILED'] :
    kind === 'tools' && (!category || category === 'app') ? ['LIVE', 'BETA', 'BUILDING', 'COMING_SOON', 'OPEN_SOURCE'] : [];
  const topics = [...new Set(list.filter(e => kind !== 'tools' || !category || ('category' in e && e.category === category)).flatMap(e => [e.topic, ...e.tags]))];
  const categoryLabel = categories.find(([value]) => value === category)![1];
  const clearHref = category ? `/tools?${new URLSearchParams({ category })}` : '/tools';
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
    {kind === 'tools' && <nav className={`tool-categories ${styles.toolCategories}`} aria-label="工具分类">{categories.map(([value, label]) => {
      const query = new URLSearchParams();
      if (value) query.set('category', value);
      if (q) query.set('q', q);
      return <Link key={value} href={query.size ? `/tools?${query}` : '/tools'} aria-current={category === value ? 'page' : undefined}>{label}</Link>;
    })}</nav>}
    <form className={kind === 'tools' ? styles.toolSearch : 'search'} role="search">
      <label htmlFor="q">搜索标题、主题或标签</label>
      <div>
        {kind === 'tools' && <input type="hidden" name="category" value={category} />}
        <input id="q" name="q" type={kind === 'tools' ? 'search' : 'text'} maxLength={kind === 'tools' ? 200 : undefined} defaultValue={q} placeholder={kind === 'tools' ? '例如：翻译、排版、学习' : '输入关键词…'} />
        {kind !== 'tools' && <>
          <select name="topic" defaultValue={topic} aria-label="主题或标签"><option value="">所有主题 / 标签</option>{topics.map(t => <option key={t}>{t}</option>)}</select>
          {states.length > 0 && <select name="status" defaultValue={status} aria-label="状态"><option value="">所有状态</option>{states.map(s => <option key={s}>{s}</option>)}</select>}
        </>}
        <button>搜索</button>
      </div>
      {kind === 'tools' && <details className={styles.toolFilters} open={Boolean(topic || status)}>
        <summary>更多筛选</summary>
        <div>
          <div><label htmlFor="tool-topic">主题或标签</label><select id="tool-topic" name="topic" defaultValue={topic}><option value="">所有主题 / 标签</option>{topics.map(t => <option key={t}>{t}</option>)}</select></div>
          {states.length > 0 && <div><label htmlFor="tool-status">状态</label><select id="tool-status" name="status" defaultValue={status}><option value="">所有状态</option>{states.map(s => <option key={s} value={s}>{statusLabels[s]}</option>)}</select></div>}
        </div>
        <p>选择后点击「搜索」应用筛选。</p>
      </details>}
    </form>
    <div aria-live="polite">
      {kind === 'tools' && <div className={styles.toolResults}>
        <strong>{q || topic || status ? '找到' : '共'} {results.length} 项{categoryLabel === '全部' ? '内容' : categoryLabel}</strong>
        {(q || topic || status) && <><span>{[q && `关键词：${q}`, topic && `主题：${topic}`, status && `状态：${statusLabels[status] || status}`].filter(Boolean).join(' · ')}</span><Link href={clearHref}>清除筛选 ↗</Link></>}
      </div>}
      {results.length === 0 ? <p className="empty">没有匹配的内容。{kind === 'tools' ? '试试更短的关键词，或清除筛选。' : <Link href={`/${kind}`}>清除筛选 ↗</Link>}</p> :
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
