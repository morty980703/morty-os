'use client';
import Image from 'next/image';
import { useState } from 'react';
export default function SkillAvatar({ name = 'Ponytail', src = 'https://raw.githubusercontent.com/DietrichGebert/ponytail/main/assets/logo.png', alt = 'Ponytail 官方标识' }: { name?: string; src?: string; alt?: string }) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  return <>{!loaded && <span className="skill-avatar-fallback" aria-label={`${name} 标识暂未加载`}>{name.slice(0, 1)}</span>}{!failed && <Image className="skill-avatar" src={src} alt={alt} width={56} height={56} loading="eager" unoptimized style={{ display: loaded ? 'block' : 'none' }} onLoad={() => setLoaded(true)} onError={() => setFailed(true)} />}</>;
}
