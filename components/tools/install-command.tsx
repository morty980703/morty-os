'use client';
import { useState } from 'react';
const ponytailCommand = 'codex plugin marketplace add DietrichGebert/ponytail\ncodex plugin add ponytail@ponytail';
export default function InstallCommand({ command = ponytailCommand, note = '在终端运行，然后在 Codex 的 /hooks 中检查并信任钩子，开启新对话。', source = 'https://github.com/DietrichGebert/ponytail#install', firstUse }: { command?: string; note?: string; source?: string; firstUse?: { prompt: string; check: string; source: string } }) {
  const [result, setResult] = useState<{ command: string; success: boolean } | null>(null);
  const status = result?.command === command ? result.success ? '已复制' : '复制失败，请手动选择命令' : '复制命令';
  async function copy() {
    try { await navigator.clipboard.writeText(command); setResult({ command, success: true }); }
    catch { setResult({ command, success: false }); }
  }
  return <div className="skill-install"><div><strong>Codex 安装</strong><button type="button" onClick={copy}>{status}</button></div><pre><code>{command}</code></pre><p>{note}<a href={source} target="_blank" rel="noreferrer">上游安装说明 ↗</a></p>
    {firstUse && <details className="skill-test-details"><summary>第一次使用</summary><p>完成安装与配置后，在 AI 对话里尝试：</p><p>{firstUse.prompt}</p><p><strong>怎么确认：</strong>{firstUse.check}</p><p><a href={firstUse.source} target="_blank" rel="noreferrer">依据作者用法整理 ↗</a> · 本站未实测 · 2026-10-07 核对</p></details>}
    <span role="status" className="sr-only">{status}</span></div>;
}
