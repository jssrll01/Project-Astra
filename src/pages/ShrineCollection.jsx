import React, { useState } from 'react';
import './SimplePage.css';

const shrines = [
  // Add your shrine / church images here later.
];

function ShrineCollection() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="simple-page page">
      <div className="wrap">
        <header className="page-header reveal">
          <p className="eyebrow">Shrine Collection</p>
          <h1>Holy Places &amp; Sacred Visits</h1>
          <p>A personal collection of churches, shrines, and holy sites I've visited.</p>
        </header>

        {shrines.length === 0 ? (
          <div className="empty-note reveal">Shrine photos will be added here soon.</div>
        ) : (
          <div className="photo-grid">
            {shrines.map((p) => (
              <div className="photo-tile" key={p.id} onClick={() => setSelected(p)}>
                <img src={p.src} alt={p.caption} loading="lazy" />
                <span className="photo-caption">{p.caption}</span>
              </div>
            ))}
          </div>
        )}

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

export default ShrineCollection;
