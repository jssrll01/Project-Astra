export function preloadImages(urls, width = 800) {
  if (!Array.isArray(urls)) return;
  urls.forEach((src) => {
    if (!src) return;
    const optimized = src.includes('res.cloudinary.com')
      ? src.replace('/upload/', '/upload/f_auto,q_auto,w_' + width + '/')
      : src;
    const img = new window.Image();
    img.decoding = 'async';
    img.loading = 'eager';
    img.src = optimized;
  });
}

export function cloudinaryAt(src, width, blur = false) {
  if (!src || !src.includes('res.cloudinary.com')) return src;
  const t = ['f_auto', 'q_auto'];
  if (blur) t.push('e_blur:1000');
  if (width) t.push('w_' + width);
  return src.replace('/upload/', '/upload/' + t.join(',') + '/');
}
