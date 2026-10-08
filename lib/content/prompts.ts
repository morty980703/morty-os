export type PromptEntry = {
  id: string; title: string; summary: string; kind: string; credit: string; prompt: string;
  scene: { before: string; after: string; goal: string };
  image?: string; source: string; conditions?: string; checkedOn: string;
  feedback: { heat: string; text: string; by: string; url: string };
  fields?: { marker: string; label: string; placeholder: string }[];
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
  }
];

export const promptNotice = '方法示意与社区反馈分开展示 · 中文改编未实测 · 热度为检索快照，非分享次数';
