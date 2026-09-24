import { useEffect, useState } from 'react';
const CHARS = '!<>-_ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
export default function useScramble(text, duration = 1500) {
  const [output, setOutput] = useState(text);
  useEffect(() => {
    const start = Date.now();
    const len = text.length;
    let raf;
    const tick = () => {
      const progress = Math.min((Date.now() - start) / duration, 1);
      const revealCount = Math.floor(progress * len);
      let next = '';
      for (let i = 0; i < len; i++) {
        if (i < revealCount) next += text[i];
        else next += CHARS[Math.floor(Math.random() * CHARS.length)];
      }
      setOutput(next);
      if (progress < 1) raf = requestAnimationFrame(tick);
      else setOutput(text);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [text, duration]);
  return output;
}
