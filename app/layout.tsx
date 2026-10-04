import type {Metadata} from 'next';
import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from '../components/layout/theme-toggle';
import Navigation from '../components/layout/navigation';
import './globals.css';
export const metadata:Metadata={metadataBase:new URL('https://morty-os.vercel.app'),title:{default:'Morty OS — AI × REAL BUSINESS',template:'%s | Morty OS'},description:'分享能尝试的技能、AI 用法与实践笔记，保留来源，记录实际完成的工作。',openGraph:{type:'website',siteName:'Morty OS',locale:'zh_CN'},twitter:{card:'summary_large_image'},robots:{index:false,follow:false}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="zh-CN" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{__html:"try{const t=localStorage.getItem('morty-theme');if(t==='dark'||t==='light')document.documentElement.dataset.theme=t}catch{}"}}/></head><body><a className="skip" href="#main">跳到正文</a><header><Link className="brand" href="/">MORTY OS</Link><Navigation/><ThemeToggle/><Link className="developer-avatar" href="/about" aria-label="认识开发者 Morty"><Image src="/morty/real/morty-real-master.png" alt="开发者的虚拟形象 Morty" width={48} height={48} unoptimized priority/></Link></header><main id="main">{children}</main><footer><Link href="/">MORTY OS</Link><span>做东西。做生意。记录真正有用的。</span><span>工具 · 项目 · 实践笔记</span></footer></body></html>}


