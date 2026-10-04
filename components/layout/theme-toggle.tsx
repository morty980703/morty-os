'use client';
import {useEffect,useRef} from 'react';

export default function ThemeToggle() {
  const button=useRef<HTMLButtonElement>(null);
  useEffect(()=>{button.current?.setAttribute('aria-pressed',String(document.documentElement.dataset.theme==='dark'));},[]);
  return <button ref={button} className="theme-toggle" type="button" aria-label="切换浅色或深色主题" onClick={(event) => {
    const dark = document.documentElement.dataset.theme !== 'dark';
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    try{localStorage.setItem('morty-theme',dark?'dark':'light');}catch{/* Theme still works when browser storage is unavailable. */}
    event.currentTarget.setAttribute('aria-pressed', String(dark));
  }} aria-pressed="false" title="切换浅色或深色主题"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><ellipse cx="5" cy="8" rx="2.3" ry="3" transform="rotate(-25 5 8)"/><ellipse cx="10" cy="5" rx="2.3" ry="3"/><ellipse cx="15" cy="5" rx="2.3" ry="3"/><ellipse cx="20" cy="8" rx="2.3" ry="3" transform="rotate(25 20 8)"/><path d="M12.5 11c-3 0-3.8 2.8-5.8 4.5-2.8 2.5-1.4 6 1.6 5.5 2.8-.6 5.6-.6 8.4 0 3 .5 4.4-3 1.6-5.5-2-1.7-2.8-4.5-5.8-4.5Z"/></svg></button>;
}
