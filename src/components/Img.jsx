import React, { useState } from 'react';
import './Img.css';

function cloudinaryUrl(src, width) {
  if (!src || src.indexOf('res.cloudinary.com') === -1) return src;
  return src.replace('/upload/', '/upload/f_auto,q_auto,w_' + width + '/');
}

function Img(props) {
  const src = props.src;
  const alt = props.alt || '';
  const className = props.className || '';
  const width = props.width || 800;
  const aspect = props.aspect || '4 / 3';
  const onClick = props.onClick;

  const [loaded, setLoaded] = useState(false);
  const optimized = cloudinaryUrl(src, width);

  return (
    <div
      className={'img-wrap ' + (loaded ? 'is-loaded' : 'is-loading') + ' ' + className}
      style={{ aspectRatio: aspect }}
      onClick={onClick}
    >
      <img
        src={optimized}
        alt={alt}
        loading="lazy"
        decoding="async"
        draggable="false"
        className="img-real"
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
      />
    </div>
  );
}

export default Img;
