import Image from 'next/image';
import Link from 'next/link';
export const metadata = { title: '关于 Morty OS', description: '分享技能、AI 用法、项目与实践笔记，保留来源，记录实际完成的工作。' };
export default function About() {
  return <section className="about-page"><div>
    <span className="eyebrow">关于 / MORTY OS</span>
    <h1>做真实的事。<br /><em>留下有用的东西。</em></h1>
    <p className="lead">分享能尝试的用法，也记录做出来的过程。</p>
    <p>Morty 是开发者在这个网站上的虚拟形象。这里从实际工作和网站构建出发，整理工具、项目与实践笔记。</p>
    <h2>你可以在这里找到什么</h2>
    <p>技能与提示词：先看用途和使用条件，再复制命令或用法。项目：了解已经实现的功能与当前状态。博客：阅读实践中的判断、调整和经验。</p>
    <h2>内容怎样记录</h2>
    <p>第三方分享保留原作者与来源。作者测试、社区反馈和本站实际检查分开展示；开发计划和草稿标明状态，真实记录随实践补充。</p>
    <h2>关于开发者</h2>
    <p className="author-pending">资料待补充：个人经历与经营案例尚未提供，待作者确认后整理。</p>
    <h2>联系与反馈</h2>
    <p>在 GitHub 关注后续项目与更新：<a className="text-link" href="https://github.com/morty980703" target="_blank" rel="noopener noreferrer">@morty980703 ↗</a></p>
    <p className="author-pending">问题反馈入口待补充。</p>
    <div className="about-links"><Link className="text-link" href="/tools">浏览工具与用法 ↗</Link><Link className="text-link" href="/builds/morty-os">了解本站项目 ↗</Link></div>
  </div><Image src="/morty/real/morty-real-master.png" alt="Morty 开发者虚拟形象" width={1024} height={1024} sizes="(max-width:700px) 100vw, 40vw" style={{ width: '100%', height: 'auto' }} /></section>;
}
