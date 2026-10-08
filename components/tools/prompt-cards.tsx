'use client';
import Image from 'next/image';
import { useState } from 'react';
import styles from './prompts.module.css';
import type { PromptEntry } from '../../lib/content/prompts';

function PromptCard({ entry, index, detailLinks, detail }: { entry: PromptEntry; index: number; detailLinks: boolean; detail: boolean }) {
  const Heading = detail ? 'h1' : 'h2';
  const [values, setValues] = useState<Record<string, string>>(() => Object.fromEntries((entry.fields || []).flatMap(field => field.options?.length ? [[field.marker, field.options[0].value]] : [])));
  const [status, setStatus] = useState('');
  const [imageFailed, setImageFailed] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const text = entry.prompt.replace(/【[^】]+】/g, marker => values[marker]?.trim() || marker);
  async function copy() {
    try { await navigator.clipboard.writeText(text); setStatus('已复制'); }
    catch { setStatus('复制失败，请展开提示词后手动复制'); }
  }
  return <article className={styles.card} id={entry.id}>
    <div className={styles.visual}>
      <div className={styles.visualMeta}><span>{String(index + 1).padStart(2, '0')} / {entry.kind}</span><span>{imageLoaded ? '社区原始画面' : '方法示意 · 非实测对话'}</span></div>
      {entry.image && !imageFailed && <Image src={entry.image} alt={`${entry.title}的社区来源示例`} width={640} height={360} loading="eager" unoptimized className={styles.image} style={{ display: imageLoaded ? 'block' : 'none' }} onLoad={() => setImageLoaded(true)} onError={() => setImageFailed(true)} />}
      {!imageLoaded && <>
        <p className={styles.goal}>{entry.scene.goal}</p>
        <div className={styles.comparison}>
          <div className={styles.before}><span>{entry.scene.beforeLabel || '普通问法'}</span><p>{entry.scene.before}</p></div>
          <span className={styles.arrow} aria-hidden="true">↗</span>
          <div className={styles.after}><span>{entry.scene.afterLabel || '换一种用法'}</span><p>{entry.scene.after}</p></div>
        </div>
      </>}
    </div>
    <div className={styles.body}>
      <Heading>{entry.title}</Heading>
      <p className={styles.summary}>{entry.summary}</p>
      {entry.feedback ? <div className={styles.feedback}>
        <span className={styles.feedbackLabel}>社区反馈</span>
        <p>{entry.feedback.text}</p>
        <div className={styles.feedbackMeta}><a href={entry.feedback.url} target="_blank" rel="noreferrer">使用者反馈 ↗</a><span>{entry.feedback.heat}</span></div>
      </div> : <p className={styles.caption}>{entry.credit} · 网站只复制提示词，不操作聊天。</p>}
      {entry.image && <p className={styles.caption}>{imageLoaded ? '来源图片 · 非本站生成' : imageFailed ? '社区图片暂时无法加载。' : '社区图片正在加载。'} <a href={entry.source} target="_blank" rel="noreferrer">查看原始示例 ↗</a></p>}
      {entry.fields?.some(field => field.options) && <div className={styles.fields}>{entry.fields.filter(field => field.options).map(field => <label key={field.marker}>{field.label}<select aria-label={field.label} value={values[field.marker]} onChange={event => { setValues({ ...values, [field.marker]: event.target.value }); setStatus(''); }}>{field.options?.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}</select></label>)}</div>}
      <details className={styles.expand}>
        <summary>查看提示词<span aria-hidden="true">＋</span></summary>
        {entry.fields?.some(field => !field.options) && <div className={styles.fields}>
          {entry.fields.filter(field => !field.options).map(field => <label key={field.marker}>{field.label}<input maxLength={200} value={values[field.marker] || ''} placeholder={field.placeholder} onChange={event => { setValues({ ...values, [field.marker]: event.target.value }); setStatus(''); }} /></label>)}
        </div>}
        <pre className={styles.prompt} tabIndex={0}><code>{text}</code></pre>
        <p className={styles.credit}>{entry.credit}</p>
        <p className={styles.credit}>{entry.sharedBy ? '内容整理：' : '来源与热度检索：'}<time dateTime={entry.checkedOn}>{entry.checkedOn}</time>{!entry.sharedBy && ' · 非实时数据'}</p>
        {entry.conditions && <p className={styles.conditions}>{entry.conditions}</p>}
        {entry.feedback && <a className={styles.caption} href={entry.feedback.url} target="_blank" rel="noreferrer">{entry.feedback.by} ↗</a>}
      </details>
      <div className={styles.actions}>
        <a href={entry.source} target="_blank" rel="noreferrer">{entry.sharedBy ? '相似 GitHub 案例 ↗' : '原文与讨论 ↗'}</a>
        <button type="button" onClick={copy}>{entry.sharedBy ? '复制整理提示词' : '复制这个用法'} <span aria-hidden="true">↗</span></button>
      </div>
      <div className={styles.links}><a href={detailLinks ? `/tools/prompt-${entry.id}` : `#${entry.id}`}>{detailLinks ? '单独查看 ↗' : '此卡片链接'}</a>{detail && ['video', 'learn', 'clarify'].includes(entry.id) && <a href={`/tools/prompt-builder?scene=${entry.id}`}>按我的需求整理 ↗</a>}<span role="status" aria-live="polite">{status}</span></div>
    </div>
  </article>;
}

export default function PromptCards({ entries, detailLinks = false, detail = false }: { entries: PromptEntry[]; detailLinks?: boolean; detail?: boolean }) {
  return <div className={styles.grid}>{entries.map((entry, index) => <PromptCard key={entry.id} entry={entry} index={index} detailLinks={detailLinks} detail={detail} />)}</div>;
}
