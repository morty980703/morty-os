import Link from 'next/link';
export const metadata = { title: 'Morty OS — 项目记录', description: 'Morty OS 已实现的内容浏览、技能与提示词分享、搜索、移动适配，以及当前验证与源码状态。' };
export default function Project() {
  return <article className="article">
    <Link className="eyebrow" href="/builds">← 全部项目</Link>
    <div className="eyebrow article-meta">首版已发布 · 更新于 2026-10-04</div>
    <h1>Morty OS</h1>
    <p className="lead">一个分享工具、AI 用法和实践记录的个人网站。从能浏览的内容开始，把用途、来源与当前状态讲清楚。</p>
    <div className="prose">
      <h2>现在可以做什么</h2>
      <ul>
        <li>浏览 Ponytail 的介绍、作者测试对比，并复制安装命令。</li>
        <li>探索 6 个社区提示词案例，查看问法示意、使用反馈和原文；填写所需信息后复制使用。</li>
        <li>按分类、关键词、主题或标签查找内容，阅读项目记录与实践笔记。</li>
        <li>在手机和桌面浏览，切换浅色／深色主题。</li>
      </ul>
      <p><Link className="text-link" href="/tools">进入工具与用法 ↗</Link></p>
      <h2>为什么这样做</h2>
      <p>访客首先需要知道能拿走什么。首页先展示技能和具体用法，再进入项目与文章；内容之间的相关链接保留在详情页里，方便按需要继续阅读。</p>
      <h2>这次迭代发生了什么</h2>
      <ul>
        <li>2026-10-01：建立首页、列表、详情和工具演示外壳；把 Morty 从首页大图调整为开发者头像，补齐真实项目入口。</li>
        <li>2026-10-01 至 10-03：调整 Ponytail 卡片，保留安装代码与作者测试出处，让相对消耗对比更紧凑。</li>
        <li>2026-10-03：整理社区提示词案例，区分方法示意和真实反馈；接入工具分类、搜索、详情与首页入口。</li>
        <li>2026-10-04：补充本站项目与实践文章，分开博客的实践内容和草稿，整理关于页。</li>
        <li>2026-10-04：通过内容与视觉审核，在 Vercel 发布第一版网站。</li>
      </ul>
      <h2>实现与验证</h2>
      <p>内容保存在本地文件中，页面使用 Next.js、TypeScript 和 MDX。站点已完成代码检查、类型检查、生产构建，以及页面链接、复制操作、搜索和手机／桌面深浅主题检查。</p>
      <p>这些检查验证的是网站功能与展示。Ponytail 的节省数字来自作者测试，提示词反馈来自社区原文；它们保留各自的条件与来源。</p>
      <h2>当前状态</h2>
      <p>第一版已通过作者审核并公开上线，访问地址为 <a className="text-link" href="https://morty-os.vercel.app">morty-os.vercel.app ↗</a>。尚无经验证的使用或业务效果数据。Codex 用量监控器仍是开发计划，本站的演示外壳尚未接入真实数据。</p>
      <h2>本站源码</h2>
      <p>本站源码已公开：<a className="text-link" href="https://github.com/morty980703/morty-os" target="_blank" rel="noopener noreferrer">morty980703/morty-os ↗</a>。运行方式见仓库说明；<a className="text-link" href="https://github.com/morty980703/morty-os/issues/new/choose" target="_blank" rel="noopener noreferrer">提交问题与建议 ↗</a>。第三方技能的安装与来源入口位于各自详情页。</p>
      <h2>后续迭代</h2>
      <p>根据实际使用反馈更新内容。自定义域名仍待确认；个人资料与监控器证据继续保留待补充标记。</p>
    </div>
    <aside className="relations"><Link href="/notes/building-an-honest-homepage">相关笔记 · 还没有落地工具，个人网站应该展示什么？ ↗</Link><Link href="/tools?category=skill">查看技能 ↗</Link><Link href="/tools?category=prompt">查看提示词用法 ↗</Link><Link href="/">回到首页 ↗</Link></aside>
  </article>;
}
