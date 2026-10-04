import Link from 'next/link';
import { skills } from '../../../lib/content/skills';
import SkillCard from '../../../components/tools/skill-card';

export const metadata = { title: '技能补充预览', description: '四个新增第三方技能的用途、安装与来源。' };
export default function SkillsPreview() {
  return <section className="index"><span className="eyebrow">MORTY OS / SKILLS</span><h1>补充四个用得上的技能。</h1><p>获取资料、翻译、整理文章和做演示。<Link className="text-link" href="/tools?category=skill">查看全部 5 个技能 ↗</Link></p><div className="skill-card-grid">{skills.map(entry => <SkillCard key={entry.slug} entry={entry} detail={false} />)}</div></section>;
}
