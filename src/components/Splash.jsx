import React, { useEffect, useRef, useState } from 'react';
import './Splash.css';

const STATUSES = [
  'Initializing Astra…',
  'Calibrating orbits…',
  'Loading intelligence core…',
  'Rendering interface…',
  'Almost there…',
];

const DURATION = 5000; // total splash duration in ms
const FADE_AT = 4400;  // when fade-out begins
const HIDE_AT = 5000;  // when component unmounts

function Splash() {
  const [hidden, setHidden] = useState(false);
  const [fading, setFading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);
  const rafRef = useRef(null);
  const startRef = useRef(null);

  useEffect(() => {
    // Only show once per browser session
    const seen = sessionStorage.getItem('astra_splash_seen');
    if (seen === '1') {
      setHidden(true);
      return;
    }

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Progress ticker synced to DURATION
    const tick = (now) => {
      if (!startRef.current) startRef.current = now;
      const elapsed = now - startRef.current;
      const pct = Math.min(elapsed / DURATION, 1);
      setProgress(pct * 100);

      // Rotate status messages across 5 stages
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
      <div className="splash-stars" aria-hidden="true" />
      <div className="splash-nebula" aria-hidden="true" />

      {/* Shooting star streak */}
      <span className="splash-shoot" aria-hidden="true" />

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

        {/* Progress bar */}
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
