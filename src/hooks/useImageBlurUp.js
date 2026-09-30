import { useEffect } from 'react';

export default function useImageBlurUp() {
  useEffect(() => {
    const markLoaded = (img) => {
      if (img.complete && img.naturalWidth > 0) {
        img.classList.add('img-loaded');
      } else {
        img.addEventListener('load', () => img.classList.add('img-loaded'), { once: true });
        img.addEventListener('error', () => img.classList.add('img-error'), { once: true });
      }
    };

    const scan = () => {
      document.querySelectorAll('img:not(.img-loaded):not(.img-error)').forEach(markLoaded);
    };

    scan();

    // Watch for images added dynamically (route changes, lightbox, etc.)
    const observer = new MutationObserver(scan);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);
}
