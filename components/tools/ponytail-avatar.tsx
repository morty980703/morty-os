'use client';
import Image from 'next/image';
import { useState } from 'react';
export default function PonytailAvatar() {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  return <>{!loaded && <span className="skill-avatar-fallback" aria-label="Ponytail 标识暂未加载">P</span>}{!failed && <Image className="skill-avatar" src="https://raw.githubusercontent.com/DietrichGebert/ponytail/main/assets/logo.png" alt="Ponytail 官方标识" width={56} height={56} loading="eager" unoptimized style={{ display: loaded ? 'block' : 'none' }} onLoad={() => setLoaded(true)} onError={() => setFailed(true)} />}</>;
}
