import React, { useState, useEffect, useRef } from 'react';
import './SimplePage.css';
import './Settings.css';

const DEFAULTS = {
  reduceMotion: false,
  contrast: false,
  smoothScroll: true,
  comfortable: true,
  language: 'English',
  imageQuality: 'high',
  dataSaver: false,
  rendering: 'fast',
  animation: 'fast',
  pageTransition: 'fast',
  adaptivePerformance: true,
  shadowQuality: 'high',
  lightingQuality: 'high',
};

function loadSettings() {
  try {
    const raw = localStorage.getItem('astra_settings');
    if (!raw) return { ...DEFAULTS };
    return { ...DEFAULTS, ...JSON.parse(raw) };
  } catch {
    return { ...DEFAULTS };
  }
}

function usePWAInstall() {
  const [prompt, setPrompt] = useState(null);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    const refresh = () => setPrompt(window.__pwaPrompt || null);
    const onPrompt = (e) => { e.preventDefault(); window.__pwaPrompt = e; refresh(); };
    const onInstalled = () => { window.__pwaPrompt = null; setInstalled(true); refresh(); };

    refresh();
    window.addEventListener('beforeinstallprompt', onPrompt);
    window.addEventListener('appinstalled', onInstalled);
    window.addEventListener('pwa-prompt-ready', refresh);
    window.addEventListener('pwa-installed', onInstalled);

    if (window.matchMedia('(display-mode: standalone)').matches) setInstalled(true);

    return () => {
      window.removeEventListener('beforeinstallprompt', onPrompt);
      window.removeEventListener('appinstalled', onInstalled);
      window.removeEventListener('pwa-prompt-ready', refresh);
      window.removeEventListener('pwa-installed', onInstalled);
    };
  }, []);

  const install = async () => {
    const p = window.__pwaPrompt;
    if (!p) return false;
    p.prompt();
    const { outcome } = await p.userChoice;
    if (outcome === 'accepted') {
      window.__pwaPrompt = null;
      setPrompt(null);
      return true;
    }
    return false;
  };

  return { canInstall: !!prompt, installed, install };
}

function Toggle({ value, onChange }) {
  return (
    <button
      type="button"
      className={'toggle ' + (value ? 'on' : '')}
      onClick={() => onChange(!value)}
      aria-pressed={value}
    >
      <span className="knob"></span>
    </button>
  );
}

function CustomSelect({ value, options, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onDoc = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('touchstart', onDoc);
    return () => {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('touchstart', onDoc);
    };
  }, []);

  const label = value.charAt(0).toUpperCase() + value.slice(1);

  return (
    <div className={'cselect ' + (open ? 'open' : '')} ref={ref}>
      <button type="button" className="cselect-trigger" onClick={() => setOpen(v => !v)}>
        <span>{label}</span>
        <span className="cselect-caret">▾</span>
      </button>
      {open && (
        <ul className="cselect-menu">
          {options.map(o => (
            <li key={o}>
              <button
                type="button"
                className={'cselect-option ' + (o === value ? 'active' : '')}
                onClick={() => { onChange(o); setOpen(false); }}
              >
                {o.charAt(0).toUpperCase() + o.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Row({ title, children }) {
  return (
    <div className="settings-row">
      <span className="settings-label">{title}</span>
      <div className="settings-control">{children}</div>
    </div>
  );
}

function Settings() {
  const [s, setS] = useState(loadSettings);
  const [toast, setToast] = useState('');
  const pwa = usePWAInstall();

  useEffect(() => {
    const b = document.body;
    const app = document.querySelector('.app');

    const bodyClasses = ['set-reduce-motion','set-contrast','set-no-smooth','set-no-comfort','set-data-saver','set-adaptive'];
    b.classList.remove(...bodyClasses);
    if (s.reduceMotion) b.classList.add('set-reduce-motion');
    if (s.contrast) b.classList.add('set-contrast');
    if (!s.smoothScroll) b.classList.add('set-no-smooth');
    if (!s.comfortable) b.classList.add('set-no-comfort');
    if (s.dataSaver) b.classList.add('set-data-saver');
    if (s.adaptivePerformance) b.classList.add('set-adaptive');

    if (app) {
      const appClasses = [
        'set-render-medium','set-render-high','set-render-fast','set-render-ultra',
        'set-anim-medium','set-anim-high','set-anim-fast','set-anim-ultra',
        'set-trans-medium','set-trans-high','set-trans-fast','set-trans-ultra',
        'set-img-low','set-img-medium','set-img-high','set-img-ultra',
        'set-shadow-medium','set-shadow-high','set-shadow-ultra',
        'set-light-medium','set-light-high','set-light-ultra',
      ];
      app.classList.remove(...appClasses);
      app.classList.add('set-render-' + s.rendering);
      app.classList.add('set-anim-' + s.animation);
      app.classList.add('set-trans-' + s.pageTransition);
      app.classList.add('set-img-' + s.imageQuality);
      app.classList.add('set-shadow-' + s.shadowQuality);
      app.classList.add('set-light-' + s.lightingQuality);
    }

    localStorage.setItem('astra_settings', JSON.stringify(s));
  }, [s]);

  const set = (key, value) => {
    setS(prev => ({ ...prev, [key]: value }));
    setToast('Saved');
    clearTimeout(window.__astraToast);
    window.__astraToast = setTimeout(() => setToast(''), 1200);
  };

  const handleRefresh = () => {
    setToast('Refreshing…');
    clearTimeout(window.__astraToast);
    window.__astraToast = setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  const reset = () => {
    setS({ ...DEFAULTS });
    setToast('Reset');
    clearTimeout(window.__astraToast);
    window.__astraToast = setTimeout(() => setToast(''), 1200);
  };

  return (
    <div className="simple-page page">
      <div className="wrap">
        <header className="page-header">
          <p className="eyebrow">Settings</p>
        </header>

        <div className="settings-card glass">
          <h2 className="settings-title">Accessibility</h2>
          <Row title="Reduce Motion">
            <Toggle value={s.reduceMotion} onChange={v => set('reduceMotion', v)} />
          </Row>
          <Row title="High Contrast">
            <Toggle value={s.contrast} onChange={v => set('contrast', v)} />
          </Row>
          <Row title="Smooth Scroll">
            <Toggle value={s.smoothScroll} onChange={v => set('smoothScroll', v)} />
          </Row>
          <Row title="Comfortable Reading">
            <Toggle value={s.comfortable} onChange={v => set('comfortable', v)} />
          </Row>
        </div>

        <div className="settings-card glass">
          <h2 className="settings-title">Display</h2>
          <Row title="Language">
            <CustomSelect value={s.language} options={['English']} onChange={v => set('language', v)} />
          </Row>
          <Row title="Install App">
            {pwa.installed ? (
              <span className="tag">Installed</span>
            ) : (
              <button
                type="button"
                className="btn btn-primary install-btn"
                disabled={!pwa.canInstall}
                onClick={async () => {
                  const ok = await pwa.install();
                  setToast(ok ? 'Installing…' : 'Use browser menu to install');
                  clearTimeout(window.__astraToast);
                  window.__astraToast = setTimeout(() => setToast(''), 1600);
                }}
              >
                {pwa.canInstall ? 'Install' : 'Not Available'}
              </button>
            )}
          </Row>
        </div>

        <div className="settings-card glass">
          <h2 className="settings-title">Performance</h2>
          <Row title="Adaptive Performance">
            <Toggle value={s.adaptivePerformance} onChange={v => set('adaptivePerformance', v)} />
          </Row>
          <Row title="Data Saver">
            <Toggle value={s.dataSaver} onChange={v => set('dataSaver', v)} />
          </Row>
          <Row title="Image Quality">
            <CustomSelect value={s.imageQuality} options={['low','medium','high','ultra']} onChange={v => set('imageQuality', v)} />
          </Row>
          <Row title="Rendering">
            <CustomSelect value={s.rendering} options={['medium','high','fast','ultra']} onChange={v => set('rendering', v)} />
          </Row>
        </div>

        <div className="settings-card glass">
          <h2 className="settings-title">Effects</h2>
          <Row title="Animation Quality">
            <CustomSelect value={s.animation} options={['medium','high','fast','ultra']} onChange={v => set('animation', v)} />
          </Row>
          <Row title="Page Transition">
            <CustomSelect value={s.pageTransition} options={['medium','high','fast','ultra']} onChange={v => set('pageTransition', v)} />
          </Row>
          <Row title="Shadow Quality">
            <CustomSelect value={s.shadowQuality} options={['medium','high','ultra']} onChange={v => set('shadowQuality', v)} />
          </Row>
          <Row title="Lighting Quality">
            <CustomSelect value={s.lightingQuality} options={['medium','high','ultra']} onChange={v => set('lightingQuality', v)} />
          </Row>
        </div>

        <div className="settings-card glass" style={{ marginTop: 16 }}>
          <h2 className="settings-title">Maintenance</h2>
          <Row title="Refresh Page">
            <button className="btn btn-ghost" onClick={handleRefresh}>Refresh</button>
          </Row>
        </div>

        <div className="settings-actions">
          <button className="btn btn-ghost" onClick={reset}>Reset to Defaults</button>
        </div>

        {toast && <div className="settings-toast">{toast}</div>}
      </div>
    </div>
  );
}

export default Settings;
