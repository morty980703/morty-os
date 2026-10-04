import Link from 'next/link';
import { prompts } from '../lib/content/prompts';
import PonytailAvatar from '../components/tools/ponytail-avatar';
export default function Home() { return <div className="home-v2">
  <section className="intro">
    <span className="eyebrow">MORTY OS · AI × REAL BUSINESS</span>
    <h1>做出来的项目。<br /><em>用得上的经验。</em></h1>
    <p>精选技能与 AI 用法，分享项目和真实实践笔记。</p>
    <div className="intro-actions"><Link className="button" href="/tools">浏览工具与用法</Link><Link className="text-link" href="/builds/morty-os">查看 Morty OS 项目 ↗</Link></div>
  </section>
  <section id="tools" className="home-section">
    <div className="home-heading"><div><span className="eyebrow">TOOLS</span><h2>让 AI 更好用，从这里开始。</h2></div><Link className="text-link" href="/tools">全部工具与用法 ↗</Link></div>
    <div className="project-grid home-tool-grid">
      <Link className="project-tile" href="/tools/ponytail"><span className="badge neutral">第三方技能</span><div className="home-tool-title"><PonytailAvatar /><h3>Ponytail</h3></div><p>让 AI 少绕弯，用简单方案减少不必要的 Token 消耗。看看作者的测试，再复制安装命令。</p><span className="text-link">查看对比与安装 ↗</span></Link>
      <Link className="project-tile" href={`/tools/prompt-${prompts[0].id}`}>
        <span className="badge neutral">提示词 · 社区用法</span><h3>{prompts[0].scene.goal}</h3>
        <figure className="home-prompt-preview"><figcaption>方法示意</figcaption><div className="home-prompt-comparison">
          <div className="prompt-before"><span>普通问法</span><p>{prompts[0].scene.before}</p></div>
          <span className="prompt-direction" aria-hidden="true">→</span>
          <div className="prompt-after"><span>换一种用法</span><p>{prompts[0].scene.after}</p></div>
        </div></figure>
        <span className="text-link">查看用法与复制 ↗</span>
      </Link>
    </div>
    <div className="home-tool-links"><Link className="text-link" href="/tools?category=skill">浏览技能 ↗</Link><Link className="text-link" href="/tools?category=prompt">探索 6 个提示词用法 ↗</Link></div>
  </section>
  <section id="projects" className="home-section"><div className="home-heading"><div><span className="eyebrow">PROJECTS</span><h2>已经做出来的。</h2></div><Link className="text-link" href="/builds">全部项目 ↗</Link></div><Link className="project-tile featured-project" href="/builds/morty-os"><div><span className="badge">首版已发布</span><h3>Morty OS</h3><p>分享工具、AI 用法与实践记录的个人网站。已上线内容浏览、搜索、技能与提示词分享，并适配手机与桌面。</p><span className="text-link">查看实现与当前状态 ↗</span></div><div className="project-facts"><span>已实现</span><strong>内容浏览 / 搜索 / 移动适配</strong><span>当前阶段</span><strong>首版上线，持续迭代</strong></div></Link></section>
  <section id="blog" className="home-section"><div className="home-heading"><div><span className="eyebrow">BLOG</span><h2>从这次实践里，带走一点经验。</h2></div><Link className="text-link" href="/notes">全部文章 ↗</Link></div><Link className="blog-feature" href="/notes/building-an-honest-homepage"><span className="eyebrow">网站设计 · 实践笔记</span><h3>还没有落地工具，个人网站应该展示什么？</h3><p>从 Morty OS 的首页调整出发：先展示已有成果，把开发计划和可用工具分开，让每个入口准确说明能看到什么。</p><span className="text-link">阅读这次调整的经验 ↗</span></Link></section>
  <section className="home-about"><h2>做东西。做生意。<br />记录真正有用的。</h2><Link className="text-link" href="/about">认识 Morty OS ↗</Link></section>
</div>; }
