'use client';
import Image from 'next/image';
import { useState } from 'react';
import type { SkillEntry } from '../../lib/content/skills';

export default function SkillExample({ visual }: { visual: SkillEntry['visual'] }) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  return <figure className="skill-example">
    <figcaption>{loaded ? visual.label : '工作方式示意 · 非实测对话'}</figcaption>
    {visual.image && !failed && <Image src={visual.image} alt={visual.label} width={640} height={360} loading="eager" unoptimized style={{ display: loaded ? 'block' : 'none' }} onLoad={() => setLoaded(true)} onError={() => setFailed(true)} />}
    {!loaded && <div className="skill-example-flow"><div><span>提供</span><strong>{visual.input}</strong></div><span className="skill-example-arrow" aria-hidden="true">→</span><div><span>整理为</span><strong>{visual.output}</strong></div></div>}
    <a href={visual.source} target="_blank" rel="noreferrer">{visual.image ? '查看作者原始示例 ↗' : '查看上游工作方式 ↗'}</a>
  </figure>;
}
