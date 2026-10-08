import Link from 'next/link';
import { prompts } from '../lib/content/prompts';
import { entries } from '../lib/content';
import PonytailAvatar from '../components/tools/ponytail-avatar';
export default function Home() {
  const skillCount = entries.filter(e => e.kind === 'tools' && 'category' in e && e.category === 'skill').length;
  const latestShare = prompts.find(p => p.id === 'conversation-organizer');
  const featuredNotes = ['ask-before-changing', 'choosing-your-first-skill'].map(slug => entries.find(e => e.kind === 'notes' && e.slug === slug && 'editorialStatus' in e && e.editorialStatus === 'ready')).filter(e => e !== undefined);
  return <div className="home-v2">
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
      <article className="project-tile">
        <span className="badge neutral">提示词 · 本站工具</span><h3>把你的需求整理成提示词。</h3>
        <figure className="home-prompt-preview"><figcaption>流程示意 · 本地模板</figcaption><div className="home-prompt-comparison">
          <div className="prompt-before"><span>写下需求</span><p>想学会相机的拍摄参数。</p></div>
          <span className="prompt-direction" aria-hidden="true">→</span>
          <div className="prompt-after"><span>整理成提示词</span><p>补上基础和目标，复制到 AI 对话。</p></div>
        </div></figure>
        <div className="home-tool-links"><Link className="text-link" href="/tools/prompt-builder">按我的需求整理 ↗</Link><Link className="text-link" href="/tools?category=prompt">参考分享案例 ↗</Link></div>
      </article>
    </div>
    {latestShare && <aside className="home-latest-share" aria-label="最新分享"><span className="eyebrow">最新分享 · {latestShare.sharedBy}</span><Link className="text-link" href={`/tools/prompt-${latestShare.id}`}>{latestShare.title} ↗</Link></aside>}
    <div className="home-tool-links"><Link className="text-link" href="/tools?category=skill">浏览 {skillCount} 项技能 ↗</Link><Link className="text-link" href="/tools?category=prompt">探索 {prompts.length} 个提示词用法 ↗</Link></div>
  </section>
  <section id="projects" className="home-section"><div className="home-heading"><div><span className="eyebrow">PROJECTS</span><h2>已经做出来的。</h2></div><Link className="text-link" href="/builds">全部项目 ↗</Link></div><Link className="project-tile featured-project" href="/builds/morty-os"><div><span className="badge">首版已发布</span><h3>Morty OS</h3><p>分享工具、AI 用法与实践记录的个人网站。已上线技能与提示词分享、本地模板提示词整理器、内容搜索，并适配手机与桌面。</p><span className="text-link">查看实现与当前状态 ↗</span></div><div className="project-facts"><span>已实现</span><strong>提示词整理 / 搜索 / 移动适配</strong><span>当前阶段</span><strong>首版上线，持续迭代</strong></div></Link></section>
  <section id="blog" className="home-section"><div className="home-heading"><div><span className="eyebrow">BLOG</span><h2>从这次实践里，带走一点经验。</h2></div><Link className="text-link" href="/notes">全部文章 ↗</Link></div><div className="project-grid">{featuredNotes.map(note => <Link className="blog-feature" href={`/notes/${note.slug}`} key={note.slug}><span className="eyebrow">{note.tags[0]} · 实践笔记</span><h3>{note.title}</h3><p>{note.summary}</p><span className="text-link">阅读全文 ↗</span></Link>)}</div></section>
  <section className="home-about"><h2>做东西。做生意。<br />记录真正有用的。</h2><Link className="text-link" href="/about">认识 Morty OS ↗</Link></section>
</div>; }
