import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { siteURL } from '../lib/site';

export const alt = 'Morty OS — AI × REAL BUSINESS，工具、项目与实践笔记';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function ShareImage() {
  const image = await readFile(join(process.cwd(), 'public/morty/real/morty-real-master.png'));
  return new ImageResponse(<div style={{ display: 'flex', width: '100%', height: '100%', background: '#f5f5f7', color: '#1d1d1f', padding: 72, alignItems: 'center', justifyContent: 'space-between' }}>
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ fontSize: 22, letterSpacing: 3, color: '#626268' }}>AI × REAL BUSINESS</div>
      <div style={{ fontSize: 88, fontWeight: 700, letterSpacing: -4, marginTop: 28 }}>Morty OS</div>
      <div style={{ fontSize: 28, color: '#0067cc', marginTop: 26 }}>TOOLS / PROJECTS / NOTES</div>
      <div style={{ fontSize: 20, color: '#626268', marginTop: 64 }}>{siteURL.host}</div>
    </div>
    <div style={{ display: 'flex', position: 'relative', width: 300, height: 300, borderRadius: 64, overflow: 'hidden', background: '#eee9e3' }}>
      {/* Canonical asset, proportional framing only; no replacement character. */}
      {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse renders img directly. */}
      <img src={`data:image/png;base64,${image.toString('base64')}`} alt="Morty" width={2212} height={1475} style={{ position: 'absolute', left: -400, top: -75 }} />
    </div>
  </div>, size);
}
