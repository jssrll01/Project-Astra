import React, { useState, useEffect, useRef } from 'react';
import './Img.css';

/**
 * Cloudinary-aware image with advanced blur-up (LQIP) loading.
 *
 * - 12px blurred placeholder loads in ~100ms
 * - Real image fades in over 0.8s once decoded
 * - Uses Image.decode() so the swap only happens when the browser is ready
 * - Skips the placeholder if the image is already cached
 */

function cloudinaryUrl(src, width, opts = {}) {
  if (!src || !src.includes('res.cloudinary.com')) return src;
  const transform = ['f_auto', 'q_auto'];
  if (opts.blur) transform.push('e_blur:1000');
  if (width) transform.push('w_' + width);
  return src.replace('/upload/', '/upload/' + transform.join(',') + '/');
}

function Img({
  src,
  alt = '',
  className = '',
  eager = false,
  width = 800,
  sizes = '(max-width: 600px) 50vw, (max-width: 1000px) 33vw, 25vw',
  aspect = '4 / 3',
  onClick,
}) {
  const [realSrc, setRealSrc] = useState(null); // null = not yet loaded
  const imgRef = useRef(null);

  const placeholder = cloudinaryUrl(src, 12, { blur: true });
  const src400 = cloudinaryUrl(src, 400);
  const src800 = cloudinaryUrl(src, 800);
  const src1200 = cloudinaryUrl(src, 1200);

  useEffect(() => {
    // Reset when src changes
    setRealSrc(null);

    // Preload the real image via an offscreen Image() so we can decode it
    const preload = new window.Image();
    preload.src = src800;

    const finish = () => setRealSrc(src800);

    // Use decode() if available for smoother swap
    if (typeof preload.decode === 'function') {
      preload.decode().then(finish).catch(finish);
    } else {
      if (preload.complete) finish();
      else {
        preload.onload = finish;
        preload.onerror = finish;
      }
    }
  }, [src, src800]);

  return (
    <div
      className={'img-wrap ' + (realSrc ? 'is-loaded' : 'is-loading') + ' ' + className}
      style={{ aspectRatio: aspect }}
      onClick={onClick}
    >
      {/* Blurred placeholder — always in DOM, fades out when real arrives */}
      <img
        src={placeholder}
        alt=""
        className="img-blur"
        aria-hidden="true"
        draggable="false"
      />

      {/* Skeleton shimmer layer beneath the blur (only while loading) */}
      <div className="img-skeleton" aria-hidden="true" />

      {/* Real image — only mounted once decoded, so no flash */}
      {realSrc && (
        <img
          ref={imgRef}
          src={src800}
          srcSet={`${src400} 400w, ${src800} 800w, ${src1200} 1200w`}
          sizes={sizes}
          alt={alt}
          className="img-real"
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          draggable="false"
        />
      )}
    </div>
  );
}

export default Img;
