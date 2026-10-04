'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
export default function Navigation(){const path=usePathname();return <nav aria-label="主导航">{[['/','首页'],['/tools','工具'],['/builds','项目'],['/notes','博客'],['/about','关于']].map(([href,label])=><Link key={href} href={href} aria-current={(href==='/'?path==='/':path===href||path.startsWith(href+'/'))?'page':undefined}>{label}</Link>)}</nav>}
