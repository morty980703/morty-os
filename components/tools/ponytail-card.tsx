import PonytailAvatar from './ponytail-avatar';
import InstallCommand from './install-command';
const source = 'https://github.com/DietrichGebert/ponytail/blob/main/benchmarks/results/2026-06-18-agentic.md';
export default function PonytailCard() {
  return <article className="skill-preview-card">
    <header><PonytailAvatar /><h1>Ponytail</h1><span className="badge neutral">少绕弯，减少消耗</span></header>
    <p>让 AI 少绕弯，用简单方案减少不必要的 Token 消耗。</p>
    <InstallCommand firstUse={{ prompt: '/ponytail', check: '在新对话中查看启动提示，或发送上方指令查看当前模式。显示当前模式说明已启用，不代表每次都会节省消耗。', source: 'https://github.com/DietrichGebert/ponytail#commands' }} />
    <figure className="skill-preview-chart compact-token"><figcaption>Token 消耗对比<span>相对消耗，非实际 Token 数 · 使用前 = 100</span></figcaption>
      <div className="token-comparison"><div><span>使用前</span><strong>100</strong></div><span className="token-arrow" aria-hidden="true">→</span><div><span>使用后</span><strong>78</strong></div><div className="token-reduction"><span>平均减少</span><strong>22%</strong></div></div></figure>
    <p className="skill-preview-source">作者开发任务测试 · 本站未复现 · 非节省保证</p>
    <details className="skill-test-details"><summary>测试说明</summary><p>2026-06-18，Haiku 4.5；12 项功能任务，每项每组 4 次运行。对比数值按未启用技能的消耗归一化为 100，并非实际 Token 数量。</p><p>结果不能直接推广到普通聊天或其他模型；作者指出部分模型可能增加消耗。</p><a href={source} target="_blank" rel="noreferrer">查看作者原始测试 ↗</a></details>
  </article>;
}
