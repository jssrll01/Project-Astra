import React, { useMemo } from 'react';
import './Background.css';

// Deterministic pseudo-random for stable star positions across renders
function seeded(i, salt = 0) {
  const x = Math.sin((i + 1) * (salt + 1) * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

function Starfield({ count = 120, depth = 1 }) {
  const stars = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      const r1 = seeded(i, 10 + depth);
      const r2 = seeded(i, 20 + depth);
      const r3 = seeded(i, 30 + depth);
      const r4 = seeded(i, 40 + depth);
      const size = r1 > 0.92 ? 2 : r1 > 0.6 ? 1.5 : 1;
      return {
        id: i,
        left: (r1 * 100).toFixed(3) + '%',
        top: (r2 * 100).toFixed(3) + '%',
        size: size,
        opacity: (0.3 + r3 * 0.6).toFixed(2),
        delay: (r4 * 8).toFixed(2) + 's',
        duration: (2.5 + r3 * 3.5).toFixed(2) + 's',
      };
    });
  }, [count, depth]);

  return (
    <div className={'bg-stars-field depth-' + depth} aria-hidden="true">
      {stars.map(s => (
        <span
          key={s.id}
          className="bg-star"
          style={{
            left: s.left,
            top: s.top,
            width: s.size + 'px',
            height: s.size + 'px',
            opacity: s.opacity,
            animationDelay: s.delay,
            animationDuration: s.duration,
          }}
        />
      ))}
    </div>
  );
}

function Background() {
  return (
    <div className="bg-layer" aria-hidden="true">
      {/* Layered starfield — 3 depths for parallax feel */}
      <Starfield count={140} depth={1} />
      <Starfield count={90}  depth={2} />
      <Starfield count={50}  depth={3} />

      <div className="bg-glow bg-glow-1" />
      <div className="bg-glow bg-glow-2" />
      <div className="bg-glow bg-glow-3" />

      <div className="asteroid-belt">
        <span className="asteroid a1" />
        <span className="asteroid a2" />
        <span className="asteroid a3" />
        <span className="asteroid a4" />
        <span className="asteroid a5" />
        <span className="asteroid a6" />
        <span className="asteroid a7" />
        <span className="asteroid a8" />
      </div>

      <div className="far-satellite">
        <span className="fs-body" />
        <span className="fs-panel" />
      </div>

      <div className="supernova" />

      <span className="shooting-star ss1" />
      <span className="shooting-star ss2" />
      <span className="shooting-star ss3" />
    </div>
  );
}

export default Background;
