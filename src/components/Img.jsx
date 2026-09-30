import React, { useState, useEffect } from 'react';
import './Img.css';

/**
 * Cloudinary-aware image with:
 *  - global in-memory cache (no reload across routes)
 *  - forced eager preload of every image on mount
 *  - blurred 12px LQIP placeholder for every image
 *  - smooth fade when the sharp version is ready
 */

// Module-level cache: src → 'loaded' | Promise
const IMG_CACHE = new Map();
const LQIP_CACHE = new Map();

function cloudinaryUrl(src, width, opts = {}) {
  if (!src || !src.includes('res.cloudinary.com')) return src;
  const t = ['f_auto', 'q_auto'];
  if (opts.blur) t.push('e_blur:1000');
  if (width) t.push('w_' + width);
  return src.replace('/upload/', '/upload/' + t.join(',') + '/');
}

function preload(src) {
  if (!src) return Promise.resolve();
  if (IMG_CACHE.get(src) === 'loaded') return Promise.resolve();
  if (IMG_CACHE.has(src)) return IMG_CACHE.get(src);

  const p = new Promise((resolve) => {
    const img = new window.Image();
    img.src = src;
    const done = () => {
      IMG_CACHE.set(src, 'loaded');
      resolve();
    };
    if (typeof img.decode === 'function') {
      img.decode().then(done).catch(done);
    } else if (img.complete) {
      done();
    } else {
      img.onload = done;
      img.onerror = done;
    }
  });

  IMG_CACHE.set(src, p);
  return p;
}

function Img({
  src,
  alt = '',
  className = '',
  width = 800,
  sizes = '(max-width: 600px) 50vw, (max-width: 1000px) 33vw, 25vw',
  aspect = '4 / 3',
  onClick,
}) {
  const [loaded, setLoaded] = useState(false);

  const lqip = LQIP_CACHE.get(src) || cloudinaryUrl(src, 12, { blur: true });
  LQIP_CACHE.set(src, lqip);

  const src400 = cloudinaryUrl(src, 400);
  const src800 = cloudinaryUrl(src, 800);
  const src1200 = cloudinaryUrl(src, 1200);

  useEffect(() => {
    if (IMG_CACHE.get(src) === 'loaded') {
      setLoaded(true);
      return;
    }
    preload(src800).then(() => setLoaded(true));
  }, [src, src800]);

  return (
    <div
      className={'img-wrap ' + (loaded ? 'is-loaded' : 'is-loading') + ' ' + className}
      style={{ aspectRatio: aspect }}
      onClick={onClick}
    >
      <img
        src={lqip}
        alt=""
        className="img-blur"
        aria-hidden="true"
        draggable="false"
      />
      <div className="img-skeleton" aria-hidden="true" />
      {loaded && (
        <img
          src={src800}
          srcSet={`${src400} 400w, ${src800} 800w, ${src1200} 1200w`}
          sizes={sizes}
          alt={alt}
          className="img-real"
          decoding="async"
          draggable="false"
        />
      )}
    </div>
  );
}

export default Img;
