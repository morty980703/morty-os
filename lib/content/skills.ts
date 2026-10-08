export type SkillEntry = {
  slug: string; title: string; name: string; summary: string; badge: string; tags: string[];
  author: string; avatar: string; source: string; stars: number; heatScope: string; heatCheckedOn: string;
  command: string; installNote: string; conditions: string; feedback: string; feedbackURL: string;
  firstUse: { prompt: string; check: string; source: string; checkedOn: string };
  visual: { label: string; input: string; output: string; source: string; image?: string };
};

export const skills: SkillEntry[] = [
  {
    slug: 'agent-reach', title: 'Agent Reach', name: 'agent-reach', badge: '读取资料', tags: ['资料获取', '网页', '视频', '搜索'],
    summary: '让 AI 读取网页与视频字幕，少做手动搜索和复制。',
    author: 'Panniantong', avatar: 'https://avatars.githubusercontent.com/u/73925474?v=4',
    source: 'https://github.com/Panniantong/Agent-Reach', stars: 90154, heatScope: 'Agent Reach 整个仓库', heatCheckedOn: '2026-10-04',
    command: 'npx skills add Panniantong/Agent-Reach --skill agent-reach --agent codex --global',
    installNote: '在终端运行。还需按上游说明配置读取工具；需要账号的渠道可按需开启。',
    firstUse: { prompt: '请使用 Agent Reach 读取这个公开网页，列出 3 条重点并附原文依据：【替换为网页链接】。', check: '先在终端运行 agent-reach doctor，确认网页渠道可用；再核对读取结果是否对应原网页。仅安装技能文件不等于读取工具已配置。', source: 'https://github.com/Panniantong/Agent-Reach#装好就能用', checkedOn: '2026-10-07' },
    conditions: '需要能执行命令的 AI 环境。安装技能文件后，还需配置 Agent Reach 的运行环境和读取工具；用 agent-reach doctor 检查渠道。网页、视频和社交平台的实际可用性受网络、登录与平台变化影响。',
    feedback: '用户反馈网页搜索、YouTube 和 B站可用，同时报告小红书登录失败；功能需按具体渠道确认。',
    feedbackURL: 'https://github.com/Panniantong/Agent-Reach/issues/108',
    visual: { label: '获取资料的方式', input: '网页或视频链接', output: '可整理的正文与字幕', source: 'https://github.com/Panniantong/Agent-Reach#支持的平台' },
  },
  {
    slug: 'baoyu-translate', title: '宝玉翻译', name: 'baoyu-translate', badge: '文章翻译', tags: ['翻译', '外文', '术语', '宝玉'],
    summary: '按你的术语和表达习惯翻译文章，减少反复解释要求。',
    author: 'JimLiu', avatar: 'https://avatars.githubusercontent.com/u/648674?v=4',
    source: 'https://github.com/JimLiu/baoyu-skills/tree/main/skills/baoyu-translate', stars: 26327, heatScope: 'baoyu-skills 技能合集', heatCheckedOn: '2026-10-04',
    command: 'npx skills add JimLiu/baoyu-skills --skill baoyu-translate --agent codex --global',
    installNote: '在终端运行。首次使用设置目标语言与翻译偏好，之后可直接提出翻译需求。',
    firstUse: { prompt: '请使用 baoyu-translate，把我提供的这篇短文快速翻译成中文，保留专有名词：【粘贴短文】。', check: '首次使用按提示完成语言偏好设置；查看生成的 translation.md，并与原文核对名词和数字。输出符合要求不等于技能已被读取，可查看对话中的技能读取记录。', source: 'https://github.com/JimLiu/baoyu-skills/blob/main/skills/baoyu-translate/SKILL.md', checkedOn: '2026-10-07' },
    conditions: '需要 Bun 或 npx。首次配置默认语言、模式和术语偏好；提供快速、标准与精翻三种模式。用于翻译文章和文件，不会自动修改已安装技能的指令语言。',
    feedback: '上游提供三种翻译流程与术语表设置；本轮未找到该单项的独立效果反馈。',
    feedbackURL: 'https://github.com/JimLiu/baoyu-skills/blob/main/skills/baoyu-translate/SKILL.md',
    visual: { label: '翻译时保留要求', input: '外文文章与术语表', output: '按同一套术语翻译', source: 'https://github.com/JimLiu/baoyu-skills/blob/main/skills/baoyu-translate/SKILL.md' },
  },
  {
    slug: 'baoyu-format-markdown', title: '文章排版', name: 'baoyu-format-markdown', badge: '整理文字', tags: ['文章', '排版', 'Markdown', '宝玉'],
    summary: '把已有文字排成清楚的标题、重点与列表，方便阅读和分享。',
    author: 'JimLiu', avatar: 'https://avatars.githubusercontent.com/u/648674?v=4',
    source: 'https://github.com/JimLiu/baoyu-skills/tree/main/skills/baoyu-format-markdown', stars: 26327, heatScope: 'baoyu-skills 技能合集', heatCheckedOn: '2026-10-04',
    command: 'npx skills add JimLiu/baoyu-skills --skill baoyu-format-markdown --agent codex --global',
    installNote: '在终端运行。提供文字文件，提出排版需求；结果保存为独立的格式化文件。',
    firstUse: { prompt: '请使用 baoyu-format-markdown，整理我提供的文字文件，加上清楚的标题、重点和列表，保留原意，另存新文件。', check: '先提供一个短文字文件；查看生成的 -formatted.md，确认层次清楚且原文保留。可查看对话中的技能读取记录，区分普通回答和技能执行。', source: 'https://github.com/JimLiu/baoyu-skills/blob/main/skills/baoyu-format-markdown/SKILL.md', checkedOn: '2026-10-07' },
    conditions: '需要 Bun 或 npx。处理纯文本与 Markdown（轻量标记文本）；按上游规则保留原意，只整理格式和明显错字，输出为新的 -formatted.md 文件。排版不能代替内容核查。',
    feedback: '上游明确保留原意、调整层次与中英文排版；本轮未找到该单项的独立效果反馈。',
    feedbackURL: 'https://github.com/JimLiu/baoyu-skills/blob/main/skills/baoyu-format-markdown/SKILL.md',
    visual: { label: '让文字更容易读', input: '已有文字与段落', output: '标题 · 重点 · 列表', source: 'https://github.com/JimLiu/baoyu-skills/blob/main/skills/baoyu-format-markdown/SKILL.md' },
  },
  {
    slug: 'guizang-ppt-skill', title: '归藏 PPT', name: 'guizang-ppt-skill', badge: '网页演示', tags: ['演示', '幻灯片', 'PPT', '归藏'],
    summary: '把文章与想法做成有设计感的网页演示，减少逐页安排版式。',
    author: 'op7418', avatar: 'https://avatars.githubusercontent.com/u/13505770?v=4',
    source: 'https://github.com/op7418/guizang-ppt-skill', stars: 27220, heatScope: 'guizang-ppt-skill 整个仓库', heatCheckedOn: '2026-10-04',
    command: 'npx skills add op7418/guizang-ppt-skill --skill guizang-ppt-skill --agent codex --global',
    installNote: '在终端运行。提供文章、页数和风格要求，生成可在浏览器打开的网页演示。',
    firstUse: { prompt: '请使用 guizang-ppt-skill，把我提供的文章做成 5 页瑞士风网页演示，输出可在浏览器打开的 HTML 文件。', check: '先提供一篇短文章；打开生成的 HTML，检查内容与翻页。结果是网页演示，不是 PowerPoint 文件；可查看对话中的技能读取记录确认调用。', source: 'https://github.com/op7418/guizang-ppt-skill/blob/main/SKILL.md', checkedOn: '2026-10-07' },
    conditions: '支持 Codex、Claude Code 等环境。主要输出单文件 HTML（网页文件），不是可直接编辑的 PowerPoint 文件。配图需要可用的图像生成能力；作者示例不能保证每次生成同样效果。仓库标示 AGPL-3.0 许可。',
    feedback: '作者提供杂志风与瑞士风实际作品；用户提出分享和布局需求，当前问题区也有模板检查反馈。',
    feedbackURL: 'https://github.com/op7418/guizang-ppt-skill/issues/10',
    visual: { label: '作者示例 · 瑞士风网页演示', input: '文章与核心观点', output: '有层次的网页演示', source: 'https://github.com/op7418/guizang-ppt-skill/blob/main/README.md', image: 'https://github.com/user-attachments/assets/8960e78c-69bb-4b7e-aa95-6fad64b70314' },
  },
];
