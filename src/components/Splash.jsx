import React, { useEffect, useRef, useState } from 'react';
import './Splash.css';

const STATUSES = [
  'Initializing Astra…',
  'Calibrating orbits…',
  'Loading intelligence core…',
  'Mapping star field…',
  'Rendering interface…',
  'Warming AI modules…',
  'Syncing constellation…',
  'Almost there…',
];

const DURATION = 10000; // total splash duration in ms
const FADE_AT = 9300;   // when fade-out begins
const HIDE_AT = 10000;  // when component unmounts

// Deterministic pseudo-random so meteors stay scattered and never overlap
function seeded(i, salt = 0) {
  const x = Math.sin((i + 1) * (salt + 1) * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

// 22 meteors, each with its own lane, start delay, duration, and drift
const METEORS = Array.from({ length: 22 }).map((_, i) => {
  const r1 = seeded(i, 1);
  const r2 = seeded(i, 2);
  const r3 = seeded(i, 3);
  const r4 = seeded(i, 4);
  return {
    id: i,
    // Top lane: spread from -5% to 85% (some start above viewport)
    top: (-5 + r1 * 90).toFixed(2),
    // Start delay: spread across the whole 10s window
    delay: (r2 * 9).toFixed(2),
    // Duration: 0.9s to 2.0s
    duration: (0.9 + r3 * 1.1).toFixed(2),
    // Size: 2px or 3px
    size: r4 > 0.7 ? 3 : 2,
    // Slight horizontal start offset so they don't all originate at right edge
    rightOffset: (-15 + r1 * 20).toFixed(2),
  };
});

// 90 stars with deterministic scattered positions
const STARS = Array.from({ length: 90 }).map((_, i) => {
  const r1 = seeded(i, 5);
  const r2 = seeded(i, 6);
  const r3 = seeded(i, 7);
  return {
    id: i,
    left: (r1 * 100).toFixed(2) + '%',
    top: (r2 * 100).toFixed(2) + '%',
    size: i % 11 === 0 ? 2 : 1,
    delay: (r1 * 6).toFixed(2) + 's',
    duration: (2.5 + r2 * 3).toFixed(2) + 's',
    opacity: (0.35 + r3 * 0.55).toFixed(2),
  };
});

function Splash() {
  const [hidden, setHidden] = useState(false);
  const [fading, setFading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);
  const rafRef = useRef(null);
  const startRef = useRef(null);

  useEffect(() => {
    const seen = sessionStorage.getItem('astra_splash_seen');
    if (seen === '1') {
      setHidden(true);
      return;
    }

    const tick = (now) => {
      if (!startRef.current) startRef.current = now;
      const elapsed = now - startRef.current;
      const pct = Math.min(elapsed / DURATION, 1);
      setProgress(pct * 100);

      const idx = Math.min(Math.floor(pct * STATUSES.length), STATUSES.length - 1);
      setStatusIndex(idx);

      if (pct < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };
    rafRef.current = requestAnimationFrame(tick);

    const t1 = setTimeout(() => setFading(true), FADE_AT);
    const t2 = setTimeout(() => {
      setHidden(true);
      sessionStorage.setItem('astra_splash_seen', '1');
    }, HIDE_AT);

    return () => {
      cancelAnimationFrame(rafRef.current);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (hidden) return null;

  return (
    <div className={'splash' + (fading ? ' fading' : '')} role="status" aria-label="Loading Astra">
      {/* Deep-space backdrop */}
      <div className="splash-stars-layer" aria-hidden="true" />
      <div className="splash-stars-dynamic" aria-hidden="true">
        {STARS.map(s => (
          <span
            key={s.id}
            className="star"
            style={{
              left: s.left,
              top: s.top,
              width: s.size + 'px',
              height: s.size + 'px',
              animationDelay: s.delay,
              animationDuration: s.duration,
              opacity: s.opacity,
            }}
          />
        ))}
      </div>
      <div className="splash-nebula" aria-hidden="true" />

      {/* Meteor shower — each meteor has a unique lane + timing */}
      <div className="splash-meteors" aria-hidden="true">
        {METEORS.map(m => (
          <span
            key={m.id}
            className="meteor"
            style={{
              top: m.top + '%',
              right: m.rightOffset + '%',
              animationDelay: m.delay + 's',
              animationDuration: m.duration + 's',
              width: m.size + 'px',
              height: m.size + 'px',
            }}
          />
        ))}
      </div>

      {/* Central emblem */}
      <div className="splash-inner">
        <div className="splash-orbits">
          <div className="splash-aura" aria-hidden="true" />
          <div className="splash-orbit s1"><i className="dot" /></div>
          <div className="splash-orbit s2"><i className="dot" /></div>
          <div className="splash-orbit s3"><i className="dot" /></div>
          <div className="splash-pulse" aria-hidden="true" />
          <div className="splash-mark">
            <span>A</span>
          </div>
        </div>

        <h1 className="splash-title">
          <span>A</span><span>s</span><span>t</span><span>r</span><span>a</span>
        </h1>
        <p className="splash-sub">Where Intelligence Meets Innovation</p>

        <div className="splash-progress" aria-hidden="true">
          <div className="splash-progress-track">
            <div
              className="splash-progress-fill"
              style={{ width: progress + '%' }}
            />
            <div
              className="splash-progress-glow"
              style={{ left: progress + '%' }}
            />
          </div>
          <div className="splash-progress-meta">
            <span className="splash-status">{STATUSES[statusIndex]}</span>
            <span className="splash-percent">{Math.round(progress)}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Splash;
