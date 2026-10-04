import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const size = { width: 64, height: 64 };
export const contentType = 'image/png';

export default async function Icon() {
  const image = await readFile(join(process.cwd(), 'public/morty/real/morty-real-master.png'));
  return new ImageResponse(<div style={{ display: 'flex', width: 64, height: 64, overflow: 'hidden', position: 'relative', borderRadius: 16, background: '#eee9e3' }}>
    {/* Same canonical face framing as the existing header avatar. */}
    {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse renders img directly. */}
    <img src={`data:image/png;base64,${image.toString('base64')}`} alt="Morty" width={472} height={315} style={{ position: 'absolute', left: -85, top: -16 }} />
  </div>, size);
}
