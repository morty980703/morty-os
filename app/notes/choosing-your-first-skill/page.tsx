import Link from 'next/link';
import { skills } from '../../../lib/content/skills';

export const metadata = { title: '第一次选 AI 技能，先看它能帮你少做什么', description: '从 Morty OS 这轮筛选出发，用六个问题判断用途、反馈、上手条件、GitHub 热度、兼容性与来源。' };
export default function Note() {
  return <article className="article">
    <Link className="eyebrow" href="/notes">← 全部文章</Link>
    <div className="eyebrow article-meta">本站筛选笔记 · 2026-10-04</div>
    <h1>第一次选 AI 技能，先看它能帮你少做什么</h1>
    <p className="lead">先找一件经常让你重复解释、复制或整理的事，再挑能帮上忙的技能。从一个具体需求开始，比一次装很多更容易判断有没有用。</p>
    <div className="prose">
      <h2>把需求说成一件具体的事</h2>
      <p>“我想把英文文章翻译成中文，产品名称保持原样”，就比“让 AI 更聪明”更容易匹配技能。你也可以从读视频字幕、整理文章层次、制作演示这些常见事情入手，不必先把自己归为开发者或某种职业。</p>
      <h2>我们这次保留了六个判断</h2>
      <ol>
        <li><strong>实际用途：</strong>它能帮你少做哪一步？能否用一句话说清你准备拿它做什么？</li>
        <li><strong>社群使用反馈：</strong>别人实际用来做了什么，有哪些成功经验和卡点？优先看具体案例，而不只看“很好用”的评价。</li>
        <li><strong>上手门槛：</strong>复制安装命令之后，还要装运行工具、设置偏好或连接账号吗？这些条件是否容易完成？</li>
        <li><strong>GitHub 总热度：</strong>先看仓库获得多少星，作为发现候选的基准；再确认热度属于单项还是整个合集。它不能直接证明你要用的那项效果好。</li>
        <li><strong>兼容与可控：</strong>它支持你正在使用的 AI 工具吗？输出是否符合需求，你是否能查看并调整？例如网页演示与可编辑的 PowerPoint 文件是不同的交付。</li>
        <li><strong>维护与可信：</strong>作者、原始项目和更新记录能否找到？安装说明是否清楚，出现问题是否有说明或讨论？</li>
      </ol>
      <p>这六项一起看。节省 Token（文本处理单位）或减少对话绕弯，是值得关注的用途；筛选时也要保留其他判断，不把所有技能都压成同一种效果。</p>
      <h2>现有五项，分别可以从什么需求开始</h2>
      <ul>
        <li><Link href="/tools/ponytail"><strong>Ponytail</strong></Link>：希望 AI 少绕弯、优先选择简单方案。卡片保留作者的开发任务消耗对比；普通聊天的节省幅度仍需按实际使用判断。</li>
        {skills.map(skill => <li key={skill.slug}><Link href={`/tools/${skill.slug}`}><strong>{skill.title}</strong></Link>：{skill.summary}</li>)}
      </ul>
      <p>这轮没有把所有候选都加入网站。宝玉的两项共享合集热度，目前未找到单项的独立效果反馈；Agent Reach 的渠道有运行和登录条件；归藏 PPT 的主要输出是网页演示。这些条件都保留在各自的“来源与条件”里。</p>
      <h2>装好之后，先用一次小任务</h2>
      <ol>
        <li>先看详情中的安装环境与使用条件，确认它适合你使用的工具。</li>
        <li>按作者说明安装并完成必要设置。本站展示命令，不会替你执行安装。</li>
        <li>提供一份短材料，说明任务与要求，按所在工具的方式使用该技能。</li>
        <li>看结果是否少了重复说明、减少了整理步骤，或更容易直接使用；再决定要不要留着。</li>
      </ol>
      <p>安装技能文件与配好运行能力是两回事。<a href="https://github.com/Panniantong/Agent-Reach/blob/main/docs/install.md" target="_blank" rel="noreferrer">Agent Reach 的安装说明</a>还包含渠道配置和可用性检查；<a href="https://github.com/JimLiu/baoyu-skills/blob/main/skills/baoyu-translate/SKILL.md" target="_blank" rel="noreferrer">宝玉翻译的说明</a>要求首次设置语言与偏好。本站四项新增命令中的 <code>--skill</code> 选择单项、<code>--agent codex</code> 指定工具、<code>--global</code> 指定用户范围，可在 <a href="https://github.com/vercel-labs/skills#options" target="_blank" rel="noreferrer">安装工具的原始说明</a>查看。</p>
      <h2>这份笔记的依据</h2>
      <p>这是 Morty OS 本轮筛选与内容整理的记录。用途和条件来自作者文档，用户反馈保留原始链接；工作方式示意帮助理解，不代表本站测出的效果。本站检查了浏览、搜索和复制功能，尚未测量这四项新增技能的实际效果，也没有收集访客使用反馈。</p>
    </div>
    <aside className="relations"><Link href="/tools?category=skill">查看五项技能与安装方式 ↗</Link><Link href="/builds/morty-os">相关项目 · Morty OS ↗</Link><Link href="/notes">回到全部文章 ↗</Link></aside>
  </article>;
}
