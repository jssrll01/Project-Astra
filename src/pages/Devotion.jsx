import React, { useEffect, useState } from 'react';
import './SimplePage.css';
import Img from '../components/Img';
import { preloadImages, preloadLightbox } from '../utils/preloadImages';

const devotionPhotos = [
  // Add your devotion images here:
  // { id: 1, src: 'https://...', caption: 'Devotion — 01' },
];

const devotionNotes = [
  { title: 'Daily Reflection', text: 'A short moment each day to pause, reflect, and give thanks.' },
  { title: 'Faith & Practice', text: 'How belief shapes my daily routines and the way I approach my work.' },
  { title: 'Gratitude', text: 'Remembering the people and opportunities that help me grow.' },
];

function Devotion() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    preloadImages(devotionPhotos.map(p => p.src));
  }, []);

  return (
    <div className="simple-page page">
      <div className="wrap">
        <header className="page-header reveal">
          <p className="eyebrow">Devotion</p>
          <h1>Faith &amp; Reflection</h1>
          <p>A quiet space for the things that matter beyond the screen.</p>
        </header>

        <div className="devotion-grid">
          {devotionNotes.map((n) => (
            <div className="devotion-card card" key={n.title}>
              <h3>{n.title}</h3>
              <p>{n.text}</p>
            </div>
          ))}
        </div>

        {devotionPhotos.length === 0 ? (
          <div className="empty-note reveal">Devotion photos will be added here soon.</div>
        ) : (
          <div className="photo-grid">
            {devotionPhotos.map((p) => (
              <div
                className="photo-tile"
                key={p.id}
                onMouseEnter={() => preloadLightbox(p.src)}
                onTouchStart={() => preloadLightbox(p.src)}
                onClick={() => setSelected(p)}
              >
                <Img src={p.src} alt={p.caption} />
                <span className="photo-caption">{p.caption}</span>
              </div>
            ))}
          </div>
        )}

        {selected && (
          <div className="art-lightbox" onClick={() => setSelected(null)}>
            <div className="art-lightbox-inner" onClick={(e) => e.stopPropagation()}>
              <Img src={selected.src} alt={selected.caption} width={1200} aspect="auto" />
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

export default Devotion;
