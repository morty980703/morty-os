import PromptCards from '../../../components/tools/prompt-cards';
import styles from '../../../components/tools/prompts.module.css';
import { prompts, promptNotice } from '../../../lib/content/prompts';
export const metadata = { title: '提示词分享 — 展示预览' };
export default function Preview() {
  return <div className={styles.preview}>
    <span className="eyebrow">AI 用法 · 分享预览</span>
    <h1>换个问法，打开一种用法。</h1>
    <p className={styles.intro}>从一个具体场景开始，看看别人怎么用，再带到你的对话里。</p>
    <p className={styles.note}>{promptNotice}</p>
    <PromptCards entries={prompts} />
  </div>;
}
