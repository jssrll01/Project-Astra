import React, { useState } from 'react';
import './SimplePage.css';

const photos = [
  { id: 1, src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800', caption: 'Into the woods' },
  { id: 2, src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800', caption: 'Foggy morning' },
  { id: 3, src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', caption: 'Mountain layer' },
  { id: 4, src: 'https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?w=800', caption: 'Coastal line' },
  { id: 5, src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800', caption: 'Open road' },
  { id: 6, src: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800', caption: 'Field of light' },
  { id: 7, src: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=800', caption: 'Golden hour' },
  { id: 8, src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800', caption: 'Mountain dusk' },
  { id: 9, src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800', caption: 'Star field' },
];

function Collection() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="simple-page page">
      <div className="wrap">
        <header className="page-header reveal">
          <p className="eyebrow">Collection</p>
          <h1>Moments &amp; Visuals</h1>
          <p>Photos and visuals I've captured or created.</p>
        </header>

        <div className="photo-grid">
          {photos.map((p) => (
            <div className="photo-tile" key={p.id} onClick={() => setSelected(p)}>
              <img src={p.src} alt={p.caption} loading="lazy" />
              <span className="photo-caption">{p.caption}</span>
            </div>
          ))}
        </div>

        {selected && (
          <div className="art-lightbox" onClick={() => setSelected(null)}>
            <div className="art-lightbox-inner" onClick={(e) => e.stopPropagation()}>
              <img src={selected.src} alt={selected.caption} />
              <div className="art-lightbox-info">
                <p>{selected.caption}</p>
              </div>
              <button className="art-lightbox-close" onClick={() => setSelected(null)}>×</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Collection;
