import Link from 'next/link';
import PonytailCard from '../../../components/tools/ponytail-card';
export const metadata = { title: 'Ponytail — 少绕弯，减少消耗', description: '第三方技能介绍、复制安装命令与作者测试对比。' };
export default function Ponytail() {
  return <div className="skill-preview"><Link className="eyebrow" href="/tools?category=skill">← 技能 · 第三方分享</Link><PonytailCard /></div>;
}
