import Link from 'next/link';

export const metadata = { robots: { index: false, follow: false } };

export default function PreviewLayout({ children }: { children: React.ReactNode }) {
  return <><aside className="preview-notice" aria-label="设计预览说明"><strong>设计预览</strong><span>这里保留测试方案。当前正式内容请查看工具与用法。</span><Link className="text-link" href="/tools">查看正式内容 ↗</Link></aside>{children}</>;
}
