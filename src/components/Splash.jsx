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

const DURATION = 15000; // total splash duration in ms
const FADE_AT = 14300;  // when fade-out begins
const HIDE_AT = 15000;  // when component unmounts

// Generate static meteor configs so positions differ per meteor
const METEORS = Array.from({ length: 14 }).map((_, i) => {
  const lanes = [6, 12, 18, 26, 34, 42, 50, 58, 66, 74, 82, 88, 94, 10];
  const delays = [0.4, 1.6, 2.9, 4.1, 5.4, 6.7, 7.9, 9.2, 10.4, 11.6, 12.8, 13.9, 14.2, 3.3];
  const durations = [1.2, 1.4, 1.1, 1.6, 1.3, 1.5, 1.2, 1.7, 1.3, 1.4, 1.5, 1.2, 1.6, 1.4];
  return {
    id: i,
    top: lanes[i % lanes.length],
    delay: delays[i % delays.length],
    duration: durations[i % durations.length],
    size: i % 3 === 0 ? 3 : 2,
  };
});

// Generate many stars with pseudo-random positions (deterministic on render)
const STARS = Array.from({ length: 90 }).map((_, i) => {
  const seed = (i * 9301 + 49297) % 233280;
  const rnd = seed / 233280;
  const rnd2 = ((i * 4567 + 12345) % 99991) / 99991;
  return {
    id: i,
    left: (rnd * 100).toFixed(2) + '%',
    top: (rnd2 * 100).toFixed(2) + '%',
    size: i % 11 === 0 ? 2 : 1,
    delay: (rnd * 6).toFixed(2) + 's',
    duration: (2.5 + rnd2 * 3).toFixed(2) + 's',
    opacity: (0.35 + rnd2 * 0.55).toFixed(2),
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

      {/* Meteor shower */}
      <div className="splash-meteors" aria-hidden="true">
        {METEORS.map(m => (
          <span
            key={m.id}
            className="meteor"
            style={{
              top: m.top + '%',
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
