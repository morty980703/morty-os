export type PromptEntry = {
  id: string; title: string; summary: string; kind: string; credit: string; prompt: string;
  scene: { before: string; after: string; goal: string; beforeLabel?: string; afterLabel?: string };
  image?: string; source: string; conditions?: string; checkedOn: string;
  sharedBy?: string;
  feedback?: { heat: string; text: string; by: string; url: string };
  fields?: { marker: string; label: string; placeholder: string; options?: { label: string; value: string }[] }[];
};
export const prompts: PromptEntry[] = [
  {
    "id": "clarify",
    checkedOn: '2026-10-03',
    "scene": { "before": "这件事到底该怎么办？", "after": "先问清情况，一次只问一个问题。", "goal": "把问题，一步步问清楚。" },
    "title": "卡住了，让 AI 帮你换个思路",
    "summary": "已经试过不少办法？先让 AI 问清情况，再找新方向。",
    "kind": "理清问题",
    "credit": "@Novel_Wolf7445 / @DarkSkyDad · 中文整理",
    "prompt": "我一直遇到【遇到的问题】，已经尝试过【试过的办法】，但仍未解决。请向我提问，了解足够的背景，帮助我找到新的解决思路。每次只问一个问题，等我回答后再继续。",
    "fields": [
      {
        "marker": "【遇到的问题】",
        "label": "遇到什么问题",
        "placeholder": "例如：整理计划时总是无法确定优先级"
      },
      {
        "marker": "【试过的办法】",
        "label": "已经试过什么",
        "placeholder": "例如：列清单、按截止日期排序"
      }
    ],
    "feedback": {
      "heat": "原帖赞同 6,450",
      "text": "DarkSkyDad 分享了自己常用的“一次只问一个问题”版本；另一位使用者也反馈，会手动补上这句话。",
      "by": "DarkSkyDad · 使用经验",
      "url": "https://www.reddit.com/r/ChatGPTPro/comments/1l931za/comment/mx9j48g/"
    },
    "conditions": "合并原帖与评论中的用法。原帖基于 ChatGPT 4o；逐轮提问会增加来回次数。",
    "source": "https://www.reddit.com/r/ChatGPTPro/comments/1l931za/i_am_a_prompt_engineer_this_is_the_single_most/"
  },
  {
    "id": "video",
    checkedOn: '2026-10-03',
    "scene": { "before": "长视频，要从头看到尾吗？", "after": "先总结文字稿，再决定细看哪里。", "goal": "先抓重点，再看细节。" },
    "title": "长视频，先看文字摘要",
    "summary": "把视频文字稿交给 AI，先判断哪些内容值得细看。",
    "kind": "内容整理",
    "credit": "@AnAlchemistsDream · 中文整理",
    "prompt": "请帮我总结这段 YouTube 视频文字稿。\n\n文字稿：【粘贴视频文字稿】",
    "feedback": {
      "heat": "合集帖赞同 5,835",
      "text": "degiosan 留言说，这个文字稿用法帮自己省了约 20 分钟；也有使用者分享分段输入长稿的经验。",
      "by": "degiosan · 个人自述",
      "url": "https://www.reddit.com/r/ChatGPT/comments/13cklzh/comment/jjgaafr/"
    },
    "conditions": "先取得文字稿，再粘贴需要的片段；复制视频链接不等于 AI 已读到视频。20 分钟是个别用户反馈。",
    "source": "https://www.reddit.com/r/ChatGPT/comments/13cklzh/what_are_some_of_your_favorite_chatgpt_prompts/"
  },
  {
    "id": "learn",
    checkedOn: '2026-10-03',
    "scene": { "before": "给我解释一下这个概念。", "after": "听听我的理解，追问遗漏和误区。", "goal": "让理解，经得起追问。" },
    "title": "用问答，检查自己有没有懂",
    "summary": "从你的理解出发，让 AI 追问并指出遗漏和误解。",
    "kind": "学习",
    "credit": "Reddit 原作者账号已删除 · 中文精简",
    "prompt": "我想深入理解【学习主题】。请通过提问和反馈，与我一起探索【学习主题】，找出我理解中的误区和知识空白。也请提出能进一步推动我理解的具体问题，即使我暂时答不出来也没关系，我的目标是继续学习。让我们开始。",
    "fields": [
      {
        "marker": "【学习主题】",
        "label": "想学什么",
        "placeholder": "例如：相机的光圈、快门与感光度"
      }
    ],
    "feedback": {
      "heat": "原帖赞同 528",
      "text": "sure_dove 用它梳理了一场插画讲座：通过追问挖出自己的理解，再让 AI 帮忙整理，最终完成讲稿。",
      "by": "sure_dove · 使用案例",
      "url": "https://www.reddit.com/r/ChatGPT/comments/11a5ijq/comment/j9r5p78/"
    },
    "conditions": "2023 年的社区案例；需要你主动作答，知识准确性仍需核对。",
    "source": "https://www.reddit.com/r/ChatGPT/comments/11a5ijq/i_made_a_prompt_for_a_better_way_to_learn/"
  },
  {
    "id": "story",
    checkedOn: '2026-10-03',
    "scene": { "before": "帮我看看这个故事。", "after": "站在读者角度，问出情节里的漏洞。", "goal": "借读者的眼睛，查漏。" },
    "title": "从读者视角，找故事里的漏洞",
    "summary": "检查情节是否说得通，人物与前后设定是否一致。",
    "kind": "创作",
    "credit": "@zestyplinko · 中文整理",
    "prompt": "请从读者的角度，对我的故事提出 40 个问题，重点关注情节漏洞和前后连贯性。\n\n故事：【粘贴故事或大纲】",
    "feedback": {
      "heat": "原评论赞同 666",
      "text": "ScrollingTv 表示喜欢这个用法，也提醒连续重复五六次后问题会耗尽。分享者建议先回答、更新故事，再继续检查。",
      "by": "ScrollingTv · 使用反馈",
      "url": "https://www.reddit.com/r/ChatGPT/comments/1nghrv0/comment/ne6uvyl/"
    },
    "conditions": "热度属于这条提示词评论。40 个问题较多，可先选最关键的问题回答。",
    "source": "https://www.reddit.com/r/ChatGPT/comments/1nghrv0/comment/ne4x3fh/"
  },
  {
    "id": "alternative",
    checkedOn: '2026-10-03',
    "scene": { "before": "还有什么办法？", "after": "看看不符合直觉的选择。", "goal": "给思路，留一个转弯。" },
    "title": "常规办法之外，还有什么选择",
    "summary": "建议总是差不多？试着让 AI 提出不那么直觉的做法。",
    "kind": "拓展思路",
    "credit": "@EQ4C · 中文整理",
    "prompt": "面对【当前情况】，有什么不符合直觉、却值得考虑的做法？",
    "fields": [
      {
        "marker": "【当前情况】",
        "label": "当前情况",
        "placeholder": "例如：想认识同行，但不喜欢大型社交活动"
      }
    ],
    "feedback": {
      "heat": "合集帖赞同 628",
      "text": "StranzVanWaldenberg 单独点名这句“反直觉做法”的提示词，给出积极评价并感谢分享者。",
      "by": "StranzVanWaldenberg · 正向评价",
      "url": "https://www.reddit.com/r/ChatGPTPromptGenius/comments/1m4x4ks/comment/n4992lv/"
    },
    "conditions": "反馈未展示具体结果，证据比使用案例弱；适合收集思路，再自行判断是否可行。",
    "source": "https://www.reddit.com/r/ChatGPTPromptGenius/comments/1m4x4ks/ai_prompt_hacks_nobody_talks_about/"
  },
  {
    "id": "creative",
    checkedOn: '2026-10-03',
    "scene": { "before": "不知道画什么。", "after": "让 AI 自行选择主题、风格与构图。", "goal": "把画面的决定权，交给 AI。" },
    "title": "让 AI 自己构思一张奇想画面",
    "summary": "没有具体题材时，让 AI 自由选择主题与构图，探索视觉灵感。",
    "kind": "图片",
    "credit": "@NVDA808 · 中文精简",
    "prompt": "从完全空白的创意起点开始，不沿用此前图片、对话或我的偏好。请自行决定主题、风格、场景与构图，直接生成一张原创图片。在画面清晰、构图连贯的前提下，加入丰富且有意义的细节、材质、结构和小发现，让人放大后仍有内容可看。使用当前可用的最高分辨率与画质，优先呈现真实细节，避免重复填充、视觉噪点和过度锐化。",
    "image": "https://preview.redd.it/i-gave-chatgpt-complete-creative-freedom-and-one-rule-pack-v0-ng3r4azbucph1.jpeg?auto=webp&crop=smart&s=16f550155a65bf0afddf3b9eb4708f46f87a9137&width=640",
    "feedback": {
      "heat": "原帖赞同 2,780",
      "text": "NeonFrontRange 分享了自己的生成结果：一座建在巨型天空鲸骨架里的城市图书馆。评论区也有人反馈未得到理想结果。",
      "by": "NeonFrontRange · 结果分享",
      "url": "https://www.reddit.com/r/ChatGPT/comments/1wfk52a/comment/p9mzu2u/"
    },
    "conditions": "需要支持图片生成的 AI。原帖展示 ChatGPT 结果，评论中作者称使用 Astra；具体版本与参数未完整公开。",
    "source": "https://www.reddit.com/r/ChatGPT/comments/1wfk52a/i_gave_chatgpt_complete_creative_freedom_and_one/"
  },
  {
    id: 'email',
    scene: { before: '帮我把邮件写得专业一点。', after: '交代沟通目标，保留事实与承诺。', goal: '把话说清楚，也把分寸留住。' },
    title: '邮件表达，清楚又有分寸',
    summary: '整理已有草稿，让对方更容易读懂重点和下一步。',
    kind: '邮件表达',
    credit: '@Haunting_Fill_8110 · 中文精简，补充收件背景',
    checkedOn: '2026-10-07',
    prompt: '请把下面的邮件草稿改写得专业、友好、清楚，保持自然简洁。\n收件人与沟通目标：【收件人与目标】\n草稿：【邮件草稿】\n\n删去重复、含糊和生硬表达，按背景、重点、下一步整理；不要添加未提供的事实、承诺、价格、政策或日期。输出可供我核对的邮件正文，必要时附主题；若语气敏感，再给一个替代版本。',
    fields: [
      { marker: '【收件人与目标】', label: '收件人与目标', placeholder: '例如：合作伙伴，希望确认下一次沟通时间' },
      { marker: '【邮件草稿】', label: '已有邮件草稿', placeholder: '粘贴一段简短草稿；长文可在复制后补充' },
    ],
    feedback: {
      heat: '原帖赞同快照 136',
      text: 'Middle_Efficiency471 评价这个用法有帮助，但未展示结果；另有评论认为专业、友好的短指令已经足够，不必使用长模板。',
      by: 'Middle_Efficiency471 · 正向评价，未展示结果',
      url: 'https://www.reddit.com/r/ChatGPTPromptGenius/comments/1u3wfp8/comment/orcy8wj/',
    },
    conditions: '基于作者原提示词精简，收件背景由本站补充；中文版本未实测。发送前核对事实、语气与承诺，敏感信息可先匿名化。',
    source: 'https://www.reddit.com/r/ChatGPTPromptGenius/comments/1u3wfp8/this_email_prompt_has_saved_me_from_sending/',
  },
  {
    id: 'assumptions',
    scene: { before: '我这个判断靠谱吗？', after: '找出隐藏假设，再寻找相反证据。', goal: '先看看，自己漏掉了什么。' },
    title: '做决定前，检查想当然',
    summary: '找出判断里的隐藏假设，看看哪些信息可能推翻它。',
    kind: '判断核查',
    credit: '@Funny-Future6224 · 中文整理，补充核查条件',
    checkedOn: '2026-10-07',
    prompt: '我认为【当前判断】。这个判断包含哪些隐藏假设？哪些证据可能与它矛盾？\n\n请区分已有证据、待验证的假设与建议；信息不足时直接说明，不编造反证。',
    fields: [{ marker: '【当前判断】', label: '当前判断', placeholder: '例如：每天发布内容，比每周认真写一篇更有效' }],
    feedback: {
      heat: '合集帖赞同快照 1,711',
      text: 'AsterixBT 先表示尚未尝试，随后回复说用它探索了一个困扰自己的假设，对结果满意；没有展示完整对话或量化结果。',
      by: 'AsterixBT · 使用自述',
      url: 'https://www.reddit.com/r/ChatGPTPromptGenius/comments/1jmlz3j/comment/ml31pki/',
    },
    conditions: '热度属于整篇提示词合集，不是这一条的效果评价。中文整理补充了事实与假设的区分；提出反证不等于找到了真实证据，仍需核对来源。',
    source: 'https://www.reddit.com/r/ChatGPTPromptGenius/comments/1jmlz3j/13_chatgpt_prompts_that_dramatically_improved_my/',
  },
  {
    id: 'conversation-organizer',
    title: '整理会话标题与归档建议',
    summary: '整理 Codex／ChatGPT 的会话标题，先看归档建议，确认后再操作。',
    kind: '会话整理',
    sharedBy: 'Morty',
    credit: 'Morty 分享 · 执行前需确认',
    checkedOn: '2026-10-08',
    scene: { before: '继续、帮我看看……找不到旧讨论。', after: '1008｜优化｜调整首页排版', goal: '让旧讨论，更容易找回来。', beforeLabel: '原标题', afterLabel: '命名示意' },
    fields: [{ marker: '【整理范围】', label: '整理范围', placeholder: '选择平台', options: [
      { label: '仅 Codex', value: 'Codex 会话（不包含 ChatGPT 聊天）' },
      { label: '仅 ChatGPT', value: 'ChatGPT 聊天（不包含 Codex 会话）' },
      { label: '两者都整理', value: 'Codex 会话和 ChatGPT 聊天' },
    ] }],
    prompt: `请整理我所有可访问的【整理范围】，包含标题规范化，以及一次性会话的归档建议。先检查并给出方案，等我确认后再执行，不删除任何会话。

一、检查范围与能力

- 分别检查所选平台是否支持读取会话、取得创建时间、重命名及归档
- 一边能力不可用，不影响另一边生成建议；明确具体限制和未覆盖范围，不宣称已覆盖两边全部聊天
- 按“平台＋稳定会话 ID”去重；同名会话不可视为同一条。无法可靠识别操作目标时，不执行修改
- 不为了检查而临时改变归档、置顶、项目归属等状态，不输出对话正文

二、标题命名规则

- 日期使用 createdAt 或平台明确提供的等价创建时间，转换到 Asia/Shanghai 后取 MMDD；不得使用更新时间、最近消息时间、当前日期或标题中的日期代替
- 格式统一为：MMDD｜分类｜主题。例如：1008｜优化｜调整首页排版
- 分类仅使用：功能、设计、整顿、优化、发布、分析、文档。根据实际主要内容选择，不强行归类
- 主题依据实际讨论或完成的事项概括，以中文为主，简短、具体
- 确有项目归属的会话，不重复所属项目名称；普通聊天可保留必要的品牌、产品或业务名称，便于辨认
- 无法取得创建时间、读取必要内容或可靠判断分类与主题时，保留原名，跳过改名并说明原因
- 已符合规则且准确的标题保持不变
- 建议标题重名时，用已核实的任务差异区分；无法可靠区分就列为待确认，不编造编号或内容

三、一次性会话归档检阅

- 根据实际内容判断问题是否已解决、是否仍有待办、未完成承诺、待确认决定或后续安排
- 仍在推进、承担项目主线，或包含尚未整理到主线的重要独有信息的会话，优先保留
- 已解决的一次性问答、已结束且没有后续依赖的执行记录，可以列为归档候选，并简述依据
- 不仅凭标题、创建时间、低活跃度或内容相似就推荐归档；不把标题相似当作内容重复
- 内容不足或状态不明确时，标记“待核实”，保持原状态
- 缺少创建时间只影响改名；若内容充分，仍可独立评估归档，但不能自动执行
- 已归档会话不主动恢复，也不为了读取或改名而临时取消归档

四、先给方案，等待确认

按所选平台分别输出：

A. 改名对照：会话标识或链接、旧标题 → 建议标题
B. 归档候选：会话标识或链接、当前标题、建议理由
C. 保持不变、跳过或待核实的项目及原因

- 改名和归档是两项独立操作；我确认改名不代表同意归档，反之亦然
- 同一会话涉及两项操作时，分别标明；等待我明确确认操作及范围
- 数量较多时分批展示，注明本批范围和剩余未检查范围，不因内容过多自行扩大执行范围

五、执行与核验

- 只执行我明确确认的操作和会话
- 只使用应用提供的重命名、归档功能；不直接改写数据库或会话文件
- 不修改项目名称、对话正文、项目归属、置顶，不主动调整排序，不删除或合并会话
- 归档只允许将我确认的会话从未归档改为已归档，不进行其他状态变更
- 执行前重新核对目标及状态；如果出现新消息、标题或状态变化，暂停受影响项，重新判断后再确认
- 操作后重新读取标题或归档状态核验，仅把核验成功的计入实际完成数量
- 失败或结果不确定时，先检查当前状态；无法核实时单独标记，不盲目重试
- 如果平台操作会带来不可避免的其他状态变化，先说明，不擅自绕过限制

六、完成汇报

按所选平台分别汇报：

- 实际检查数量与未覆盖范围
- 核验成功的改名数量、归档数量
- 保持不变、跳过、失败和结果不确定的项目及原因

计数按会话去重，改名与归档分别统计，避免把同一会话算成两个已检查会话。不输出对话正文，也不把建议、尝试或未核验结果当作完成。`,
    conditions: '网站只提供提示词复制，不读取或修改聊天。执行环境需具备相应平台的会话读取、重命名与归档能力。命名画面为方法示意，尚未做真实改名或归档测试。相似 GitHub 案例仅作为参考，不是本条提示词的使用反馈。',
    source: 'https://gist.github.com/fz6m/6ccf3858c64af22b993f3c879f69f951',
  }
];

export const promptNotice = '方法示意不等于实测结果 · 社区案例与 Morty 分享分别标注 · 热度为检索快照，非分享次数';
