'use client';
import { useState } from 'react';
const command = 'codex plugin marketplace add DietrichGebert/ponytail\ncodex plugin add ponytail@ponytail';
export default function InstallCommand() {
  const [status, setStatus] = useState('复制命令');
  async function copy() {
    try { await navigator.clipboard.writeText(command); setStatus('已复制'); }
    catch { setStatus('复制失败，请手动选择命令'); }
  }
  return <div className="skill-install"><div><strong>Codex 安装</strong><button type="button" onClick={copy}>{status}</button></div><pre><code>{command}</code></pre><p>在终端运行，然后在 Codex 的 /hooks 中检查并信任钩子，重启应用。<a href="https://github.com/DietrichGebert/ponytail#install" target="_blank" rel="noreferrer">其他平台安装 ↗</a></p><span role="status" className="sr-only">{status}</span></div>;
}
