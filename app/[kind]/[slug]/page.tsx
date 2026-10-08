import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Story from '../../../content/notes/why-i-built-codex-monitor.mdx';
import { note, build, tool, entries } from '../../../lib/content';
import { prompts, promptNotice } from '../../../lib/content/prompts';
import PromptCards from '../../../components/tools/prompt-cards';
import styles from '../../../components/tools/prompts.module.css';
import { skills } from '../../../lib/content/skills';
import SkillCard from '../../../components/tools/skill-card';
export function generateStaticParams() { return entries.map(e => ({ kind: e.kind, slug: e.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ kind: string; slug: string }> }): Promise<Metadata> {
  const p = await params;
  const e = entries.find(e => e.kind === p.kind && e.slug === p.slug);
  return { title: e?.title ?? '未找到', description: e?.summary };
}
export default async function Detail({ params }: { params: Promise<{ kind: string; slug: string }> }) {
  const { kind, slug } = await params;
  const e = entries.find(e => e.kind === kind && e.slug === slug);
  if (!e) notFound();
  if (kind === 'tools' && 'category' in e && e.category === 'skill') {
    const skill = skills.find(s => s.slug === slug);
    if (!skill) notFound();
    return <div className="skill-preview"><Link className="eyebrow" href="/tools?category=skill">← 技能 · 第三方分享</Link><SkillCard entry={skill} /></div>;
  }
  if (kind === 'tools' && 'category' in e && e.category === 'prompt') {
    const prompt = prompts.find(p => `prompt-${p.id}` === slug);
    if (!prompt) notFound();
    return <div className={styles.detail}><Link className="eyebrow" href="/tools?category=prompt">← 提示词 · {prompt.sharedBy ? `${prompt.sharedBy} 分享` : '社区分享'}</Link><p className={styles.note}>{promptNotice}</p><PromptCards entries={[prompt]} detail /></div>;
  }
  return <article className="article">
    <Link className="eyebrow" href={`/${kind}`}>← {kind === 'notes' ? '全部文章' : kind === 'builds' ? '全部项目' : '全部工具'}</Link>
    <div className="eyebrow article-meta">{e.topic} / {kind === 'notes' ? `${e.label} · ${note.date}` : e.label}</div>
    <h1>{e.title}</h1><p className="lead">{e.summary}</p>
    <div className="prose">{kind === 'notes' ? <Story /> : kind === 'builds' ? <>
      {[['问题', build.problem], ['假设', build.hypothesis], ['时间线', build.timeline.join('\n')], ['证据', build.evidence.join('\n')], ['决定', build.decisions.join('\n')], ['当前状态', build.currentState], ['结果', build.result]].map(([heading, text]) => <section key={heading}><h2>{heading}</h2><p className="preserve">{text}</p></section>)}
    </> : <>
      <h2>计划用途</h2><p>{tool.description}</p><h2>待确认的问题</h2><p>{tool.problem}</p>
      <h2>当前状态</h2><p>演示外壳尚未连接真实数据，暂未提供实际用量监控。</p><Link className="button" href={tool.launchUrl}>打开演示外壳 ↗</Link>
    </>}</div>
    <aside className="relations"><span className="eyebrow">相关内容</span>
      {kind !== 'notes' && <Link href={`/notes/${note.slug}`}>相关草稿 · {note.title} ↗</Link>}
      {kind !== 'builds' && <Link href={`/builds/${build.slug}`}>相关项目 · {build.title} ↗</Link>}
      {kind !== 'tools' && <Link href={`/tools/${tool.slug}`}>相关工具 · {tool.title} ↗</Link>}
      <Link href="/">回到首页 ↗</Link>
    </aside>
  </article>;
}
