import React, { useEffect, useState } from 'react';
import './Splash.css';

function Splash() {
  const [hidden, setHidden] = useState(false);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem('astra_splash_seen');
    if (seen === '1') {
      setHidden(true);
      return;
    }
    const t1 = setTimeout(() => setFading(true), 1600);
    const t2 = setTimeout(() => {
      setHidden(true);
      sessionStorage.setItem('astra_splash_seen', '1');
    }, 2100);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (hidden) return null;

  return (
    <div className={'splash' + (fading ? ' fading' : '')}>
      <div className="splash-inner">
        <div className="splash-orbits">
          <div className="splash-orbit s1" />
          <div className="splash-orbit s2" />
          <div className="splash-orbit s3" />
          <div className="splash-mark">A</div>
        </div>
        <h1 className="splash-title">Astra</h1>
        <p className="splash-sub">Where Intelligence Meets Innovation</p>
      </div>
    </div>
  );
}

export default Splash;
