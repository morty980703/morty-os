import PonytailAvatar from './ponytail-avatar';
import InstallCommand from './install-command';
const source = 'https://github.com/DietrichGebert/ponytail/blob/main/benchmarks/results/2026-10-07-agentic.md';
export default function PonytailCard() {
  return <article className="skill-preview-card">
    <header><PonytailAvatar /><h1>Ponytail</h1><span className="badge neutral">少绕弯，减少消耗</span></header>
    <p>让 AI 少绕弯，用简单方案减少不必要的 Token 消耗。</p>
    <InstallCommand firstUse={{ prompt: '/ponytail', check: '在新对话中查看启动提示，或发送上方指令查看当前模式。显示当前模式说明已启用，不代表每次都会节省消耗。', source: 'https://github.com/DietrichGebert/ponytail#commands', checkedOn: '2026-10-08' }} />
    <figure className="skill-preview-chart compact-token"><figcaption>输出 Token 对比<span>Ponytail 5 · 相对输出量，非实际 Token 数 · 未使用 = 100</span></figcaption>
      <div className="token-comparison"><div><span>未使用</span><strong>100</strong></div><span className="token-arrow" aria-hidden="true">→</span><div><span>Ponytail 5</span><strong>55</strong></div><div className="token-reduction"><span>约减少</span><strong>45%</strong></div></div></figure>
    <p className="skill-preview-source">作者开发任务测试 · 本站未复现 · 非节省保证</p>
    <details className="skill-test-details"><summary>测试说明</summary><p>2026-10-07，Opus 5.5 / Claude Code；39 项任务，每项每组 5 次运行。Ponytail 5 与未使用技能相比，输出 Token 减少约 45%（95% 区间：35%–54%）。作者先取各任务中位数，再对相对值取几何平均；图中 100 → 55 是归一化示意。</p><p>该指标不包含输入 Token，也不代表总消耗或费用降低 45%。测试仅覆盖一个模型与平台，未测 Codex 或普通聊天；测试中的 AI 不能运行代码，部分任务未检验正确性。本站未复现。</p><a href={source} target="_blank" rel="noreferrer">查看作者原始测试 ↗</a></details>
  </article>;
}
