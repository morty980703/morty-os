'use client';
import { useState } from 'react';
const ponytailCommand = 'codex plugin marketplace add DietrichGebert/ponytail\ncodex plugin add ponytail@ponytail';
export default function InstallCommand({ command = ponytailCommand, note = '在终端运行，然后在 Codex 的 /hooks 中检查并信任钩子，重启应用。', source = 'https://github.com/DietrichGebert/ponytail#install' }: { command?: string; note?: string; source?: string }) {
  const [result, setResult] = useState<{ command: string; success: boolean } | null>(null);
  const status = result?.command === command ? result.success ? '已复制' : '复制失败，请手动选择命令' : '复制命令';
  async function copy() {
    try { await navigator.clipboard.writeText(command); setResult({ command, success: true }); }
    catch { setResult({ command, success: false }); }
  }
  return <div className="skill-install"><div><strong>Codex 安装</strong><button type="button" onClick={copy}>{status}</button></div><pre><code>{command}</code></pre><p>{note}<a href={source} target="_blank" rel="noreferrer">上游安装说明 ↗</a></p><span role="status" className="sr-only">{status}</span></div>;
}
