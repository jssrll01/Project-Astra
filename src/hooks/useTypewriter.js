import { useEffect, useState } from 'react';
export default function useTypewriter(text, speed = 50, startDelay = 300) {
  const [display, setDisplay] = useState('');
  useEffect(() => {
    let i = 0;
    let interval;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        i++;
        setDisplay(text.slice(0, i));
        if (i >= text.length) clearInterval(interval);
      }, speed);
    }, startDelay);
    return () => { clearTimeout(timeout); clearInterval(interval); };
  }, [text, speed, startDelay]);
  return display;
}
