import Link from 'next/link';
import SkillAvatar from './ponytail-avatar';
import InstallCommand from './install-command';
import SkillExample from './skill-example';
import type { SkillEntry } from '../../lib/content/skills';

export default function SkillCard({ entry, detail = true }: { entry: SkillEntry; detail?: boolean }) {
  const Heading = detail ? 'h1' : 'h2';
  return <article className="skill-preview-card curated-skill" id={entry.slug}>
    <header><Heading>{entry.title}</Heading><span className="badge neutral">{entry.badge}</span></header>
    <p>{entry.summary}</p>
    <InstallCommand command={entry.command} note={entry.installNote} source={entry.source} firstUse={entry.firstUse} />
    <SkillExample key={entry.slug} visual={entry.visual} />
    <p className="skill-preview-source">第三方分享 · 本站未实测</p>
    <details className="skill-test-details"><summary>来源与条件</summary><div className="skill-author"><SkillAvatar key={entry.avatar} name={entry.author} src={entry.avatar} alt={`${entry.author} 的 GitHub 作者头像`} /><span>作者：{entry.author}</span></div><p>{entry.conditions}</p><p>{entry.feedback} <a href={entry.feedbackURL} target="_blank" rel="noreferrer">查看依据 ↗</a></p><p>{entry.heatScope}：{entry.stars.toLocaleString('en-US')} 星 · 2026-10-04 查询。热度属于整个仓库，不是单项效果或安装人数。</p><p>技能：{entry.name}</p><a href={entry.source} target="_blank" rel="noreferrer">作者与原始项目 ↗</a></details>
    {!detail && <div className="skill-card-link"><Link href={`/tools/${entry.slug}`}>单独查看 ↗</Link></div>}
  </article>;
}
