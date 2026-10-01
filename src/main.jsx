import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

try {
  const raw = localStorage.getItem('astra_settings');
  if (raw) {
    const s = JSON.parse(raw);
    const b = document.body;
    if (s.reduceMotion) b.classList.add('set-reduce-motion');
    if (s.contrast) b.classList.add('set-contrast');
    if (!s.smoothScroll) b.classList.add('set-no-smooth');
    if (!s.comfortable) b.classList.add('set-no-comfort');
    if (s.dataSaver) b.classList.add('set-data-saver');
    if (s.adaptivePerformance) b.classList.add('set-adaptive');
  }
} catch (e) {}

if ('serviceWorker' in navigator) {
  const isLocalhost =
    window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1';
  if (!isLocalhost) {
    window.addEventListener('load', () => {
//       navigator.serviceWorker.register('/sw.js').catch(() => {});
    });
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// One-time cleanup of old service workers and caches
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then(regs => {
    regs.forEach(r => r.unregister());
    if (regs.length && !sessionStorage.getItem('sw-cleared')) {
      sessionStorage.setItem('sw-cleared', '1');
      caches.keys()
        .then(ks => Promise.all(ks.map(k => caches.delete(k))))
        .then(() => location.reload());
    }
  });
}
