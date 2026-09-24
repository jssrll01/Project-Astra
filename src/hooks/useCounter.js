import { useEffect, useRef, useState } from 'react';
export default function useCounter(target, duration = 1200) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(target);
      return;
    }
    let raf, started = false;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !started) {
          started = true;
          const start = performance.now();
          const tick = (now) => {
            const p = Math.min((now - start) / duration, 1);
            setValue(Math.floor(p * target));
            if (p < 1) raf = requestAnimationFrame(tick);
            else setValue(target);
          };
          raf = requestAnimationFrame(tick);
          observer.disconnect();
        }
      });
    }, { threshold: 0.3 });
    observer.observe(el);
    return () => { observer.disconnect(); if (raf) cancelAnimationFrame(raf); };
  }, [target, duration]);
  return [value, ref];
}
