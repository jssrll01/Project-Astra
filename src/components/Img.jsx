import React, { useState, useEffect } from 'react';
import './Img.css';

const IMG_CACHE = new Map();
const LQIP_CACHE = new Map();

function cloudinaryUrl(src, width, opts) {
  opts = opts || {};
  if (!src || src.indexOf('res.cloudinary.com') === -1) return src;
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
    img.decoding = 'async';
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

function Img(props) {
  const src = props.src;
  const alt = props.alt || '';
  const className = props.className || '';
  const width = props.width || 800;
  const sizes = props.sizes || '(max-width: 600px) 50vw, (max-width: 1000px) 33vw, 25vw';
  const aspect = props.aspect || '4 / 3';
  const onClick = props.onClick;

  const [loaded, setLoaded] = useState(false);

  const lqip = LQIP_CACHE.get(src) || cloudinaryUrl(src, 12, { blur: true });
  LQIP_CACHE.set(src, lqip);

  const src400 = cloudinaryUrl(src, 400);
  const src800 = cloudinaryUrl(src, width);
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
      <img src={lqip} alt="" className="img-blur" aria-hidden="true" draggable="false" />
      <div className="img-skeleton" aria-hidden="true" />
      {loaded && (
        <img
          src={src800}
          srcSet={src400 + ' 400w, ' + src800 + ' 800w, ' + src1200 + ' 1200w'}
          sizes={sizes}
          alt={alt}
          className="img-real"
          loading="lazy"
          decoding="async"
          draggable="false"
        />
      )}
    </div>
  );
}

export default Img;
