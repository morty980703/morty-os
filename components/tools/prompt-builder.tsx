'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { prompts } from '../../lib/content/prompts';
import styles from './prompt-builder.module.css';

const scenes = [
  { id: 'video', name: '整理资料', hint: '先抓重点，再决定看什么。', example: '整理一份产品访谈记录，提炼用户需求和下一步行动。', labels: ['是什么资料？', '想怎样呈现？'], placeholders: ['例如：访谈记录、读书笔记、视频文字稿', '例如：5 条重点 + 待办清单'], defaults: ['待提供的文字资料', '重点摘要、关键细节和可行动的建议'], values: ['产品访谈记录', '需求分类 + 原文依据 + 下一步清单'] },
  { id: 'learn', name: '学习知识', hint: '从你的理解出发，一步步检查。', example: '学会相机的光圈、快门与感光度如何配合。', labels: ['目前了解多少？', '希望学会什么？'], placeholders: ['例如：刚接触，知道几个名词', '例如：能自己选择拍摄参数'], defaults: ['刚开始了解，请从基础开始', '能用自己的话解释，并完成一个小练习'], values: ['刚接触，只知道几个名词', '能根据不同光线，自己选择拍摄参数'] },
  { id: 'clarify', name: '梳理想法', hint: '把背景问清楚，再找下一步。', example: '我想开始做内容，但总是拿不定主意先做哪个主题。', labels: ['已经尝试过什么？', '希望最后得到什么？'], placeholders: ['例如：列过选题清单，仍然无法取舍', '例如：确定一个主题和第一步'], defaults: ['暂时没有明确尝试，请先问清情况', '清晰的问题描述和可执行的下一步'], values: ['列过选题清单，但每个都想做', '确定一个适合先尝试的主题和第一步'] },
];

export default function PromptBuilder({ preview = false, initialScene = 'video' }: { preview?: boolean; initialScene?: string }) {
  const [sceneId, setSceneId] = useState(() => scenes.some(item => item.id === initialScene) ? initialScene : 'video');
  const [need, setNeed] = useState('');
  const [conditions, setConditions] = useState(['', '']);
  const [result, setResult] = useState<string | null>(null);
  const [copyStatus, setCopyStatus] = useState({ text: '', message: '' });
  const output = useRef<HTMLTextAreaElement>(null);
  const scene = scenes.find(item => item.id === sceneId)!;
  const source = prompts.find(item => item.id === sceneId)!;
  const hasResult = result !== null;
  useEffect(() => { if (hasResult) output.current?.focus(); }, [hasResult]);
  function invalidate() { setResult(null); setCopyStatus({ text: '', message: '' }); }

  function generate(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const task = need.trim();
    if (!task) return;
    const [first, second] = conditions.map((value, index) => value.trim() || scene.defaults[index]);
    let text: string;
    if (sceneId === 'video') {
      const base = source.prompt.replace('请帮我总结这段 YouTube 视频文字稿。', '请帮我总结下方资料。').replace('文字稿：【粘贴视频文字稿】', '资料：【请在发送前粘贴资料正文】');
      text = `我的需求：${task}\n资料类型：${first}\n输出要求：${second}\n\n${base}\n\n请仅依据我提供的资料整理，区分原文信息与建议；信息不足时明确指出，不补造事实。`;
    } else if (sceneId === 'learn') {
      text = `我想学习：${task}\n我的基础：${first}\n学习目标：${second}\n\n请通过提问和反馈，帮助我发现理解中的误区和知识空白。每次只问一个问题，等我回答后再反馈并继续，最后用一个小练习检查理解；涉及事实时提醒我核对可靠来源。`;
    } else {
      text = `我的情况：${task}\n尝试情况：${first}\n我希望最后得到：${second}\n\n请先通过提问了解背景，确认我的目标和限制，再帮我找到可执行的下一步。每次只问一个问题，等我回答后再继续；区分已知事实、假设与建议。`;
    }
    setResult(text); setCopyStatus({ text: '', message: '' }); output.current?.focus();
  }

  async function copy() {
    const text = result;
    if (!text?.trim()) return;
    try { await navigator.clipboard.writeText(text); setCopyStatus({ text, message: '已复制' }); }
    catch { setCopyStatus({ text, message: '复制失败，请在文本框内全选并手动复制。' }); output.current?.focus(); output.current?.select(); }
  }

  return <div className={styles.preview}>
    <span className="eyebrow">{preview ? '提示词 · 交互预览' : '本站工具 · 提示词整理器'}</span>
    <h1>说出需求，带走一个好起点。</h1>
    <p className={styles.intro}>选一个场景，补充关键条件，把提示词带到你常用的 AI 对话里。</p>
    <div className={styles.workspace}>
      <form className={styles.inputPanel} onSubmit={generate}>
        <fieldset className={styles.scenes}>
          <legend>01 / 你想做什么</legend>
          <div>{scenes.map(item => <button type="button" key={item.id} aria-pressed={sceneId === item.id} onClick={() => { setSceneId(item.id); setConditions(['', '']); invalidate(); }}>{item.name}</button>)}</div>
        </fieldset>
        <p className={styles.hint}>{scene.hint}</p>
        <div className={styles.field}><label htmlFor="task-need">写下你的需求</label><textarea id="task-need" required maxLength={1500} rows={3} value={need} placeholder={scene.example} onChange={event => { setNeed(event.target.value); invalidate(); }} /></div>
        <button className={styles.example} type="button" onClick={() => { setNeed(scene.example); setConditions(scene.values); invalidate(); }}>试填一个示例 ↗</button>
        <fieldset className={styles.conditions}>
          <legend>02 / 补充两项信息 <span>可选</span></legend>
          {scene.labels.map((label, index) => <label className={styles.field} key={`${sceneId}-${index}`}>{label}<input maxLength={300} value={conditions[index]} placeholder={scene.placeholders[index]} onChange={event => { setConditions(conditions.map((value, i) => i === index ? event.target.value : value)); invalidate(); }} /></label>)}
        </fieldset>
        <button className={styles.primary} disabled={!need.trim()} type="submit">整理成提示词 <span aria-hidden="true">→</span></button>
      </form>
      <div className={styles.resultPanel}>
        <div className={styles.resultHeading}><h2>03 / 你的提示词</h2><span>本地模板组合</span></div>
        {!hasResult && <p className={styles.waiting}>写下需求，点击「整理成提示词」，即可查看、修改并复制完整文本。</p>}
        <textarea className={styles.output} ref={output} aria-label="整理后的提示词" aria-describedby={hasResult ? 'prompt-edit-help' : undefined} maxLength={10000} value={result ?? ''} hidden={!hasResult} onChange={event => { setResult(event.target.value); setCopyStatus({ text: '', message: '' }); }} />
        <div className={styles.resultActions}><span role="status" aria-live="polite">{hasResult ? copyStatus.text === result && copyStatus.message ? copyStatus.message : result?.trim() ? '可直接修改，满意后复制。' : '内容已清空，可继续输入。' : '等待你写下需求。'}</span><button type="button" className={styles.primary} onClick={copy} disabled={!result?.trim()}>复制提示词</button></div>
        {hasResult && <p id="prompt-edit-help" className={styles.usage}>重新整理会替换当前内容。复制到你常用的 AI 对话里。{sceneId === 'video' ? '发送前，把「资料」处的占位文字换成资料正文。' : '发送后，根据 AI 的提问补充回答。'}</p>}
        <details className={styles.source}>
          <summary>参考来源与使用条件</summary>
          <p>{source.credit}。基于社区用法，补充条件由本站整理；改编内容尚未实测。</p>
          {sceneId === 'video' && <p>原用法针对视频文字稿，本页扩展为资料整理。生成后需自行粘贴正文；AI 不会因为看到链接就自动读到资料。</p>}
          <p>{source.conditions}</p>
          <div><Link href={`/tools/prompt-${sceneId}`}>查看已有用法 ↗</Link><a href={source.source} target="_blank" rel="noreferrer">社区原帖 ↗</a></div>
        </details>
      </div>
    </div>
    <p className={styles.note}>内容仅在当前页面处理，刷新后清空。{preview ? '此预览' : '此工具'}使用固定模板，不调用 AI 模型，也不会提交你的输入。</p>
    <Link className={styles.back} href="/tools?category=prompt">浏览提示词案例 ↗</Link>
  </div>;
}
