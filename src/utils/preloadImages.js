const DONE = new Set();
const INFLIGHT = new Map();

function optimize(src, width) {
  if (!src || src.indexOf('res.cloudinary.com') === -1) return src;
  return src.replace('/upload/', '/upload/f_auto,q_auto,w_' + width + '/');
}

export function preloadImages(urls, width) {
  width = width || 800;
  if (!Array.isArray(urls)) return Promise.resolve();
  const list = urls.filter(Boolean).map((s) => optimize(s, width));
  return Promise.all(list.map((url) => preloadOne(url)));
}

function preloadOne(url) {
  if (DONE.has(url)) return Promise.resolve(url);
  if (INFLIGHT.has(url)) return INFLIGHT.get(url);

  const p = new Promise((resolve) => {
    const img = new window.Image();
    img.decoding = 'async';
    img.src = url;
    const finish = () => {
      DONE.add(url);
      INFLIGHT.delete(url);
      resolve(url);
    };
    if (typeof img.decode === 'function') {
      img.decode().then(finish).catch(finish);
    } else if (img.complete) {
      finish();
    } else {
      img.onload = finish;
      img.onerror = finish;
    }
  });

  INFLIGHT.set(url, p);
  return p;
}

export function isPreloaded(url) {
  return DONE.has(url);
}

// Preload a specific size variant of an image on demand
const LIGHTBOX_PRELOADED = new Set();

export function preloadLightbox(src) {
  if (!src || LIGHTBOX_PRELOADED.has(src)) return;
  LIGHTBOX_PRELOADED.add(src);
  const url = src.indexOf('res.cloudinary.com') !== -1
    ? src.replace('/upload/', '/upload/f_auto,q_auto,w_1200/')
    : src;
  const img = new window.Image();
  img.decoding = 'async';
  img.src = url;
}
