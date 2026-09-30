// Preloads an array of image URLs, decodes them, and keeps them in a
// module-level Set so repeat calls are no-ops.

const DONE = new Set();
const INFLIGHT = new Map();

export function preloadImages(urls, width = 800) {
  if (!Array.isArray(urls)) return Promise.resolve();
  const list = urls.filter(Boolean).map((src) =>
    src.includes('res.cloudinary.com')
      ? src.replace('/upload/', '/upload/f_auto,q_auto,w_' + width + '/')
      : src
  );

  return Promise.all(list.map((url) => preloadOne(url)));
}

function preloadOne(url) {
  if (DONE.has(url)) return Promise.resolve(url);
  if (INFLIGHT.has(url)) return INFLIGHT.get(url);

  const p = new Promise((resolve) => {
    const img = new window.Image();
    img.decoding = 'async';
    img.loading = 'eager';
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

export function cloudinaryAt(src, width, blur = false) {
  if (!src || !src.includes('res.cloudinary.com')) return src;
  const t = ['f_auto', 'q_auto'];
  if (blur) t.push('e_blur:1000');
  if (width) t.push('w_' + width);
  return src.replace('/upload/', '/upload/' + t.join(',') + '/');
}

export function isPreloaded(url) {
  return DONE.has(url);
}
