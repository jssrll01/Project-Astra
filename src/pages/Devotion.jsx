import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import './SimplePage.css';
import Img from '../components/Img';

const devotionPhotos = [];

const devotionNotes = [
  { title: 'Daily Reflection', text: 'A short moment each day to pause, reflect, and give thanks.' },
  { title: 'Faith & Practice', text: 'How belief shapes my daily routines and the way I approach my work.' },
  { title: 'Gratitude', text: 'Remembering the people and opportunities that help me grow.' },
];

function Devotion() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="simple-page page">
      <div className="wrap">
        <header className="page-header reveal">
          <p className="eyebrow">Devotion</p>
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
              <div className="photo-tile" key={p.id} onClick={() => setSelected(p)}>
                <Img src={p.src} alt={p.caption} />
              </div>
            ))}
          </div>
        )}

        {selected && createPortal(
          <div className="art-lightbox" onClick={() => setSelected(null)}>
            <div className="art-lightbox-inner" onClick={(e) => e.stopPropagation()}>
              <img src={selected.src} alt={selected.caption} className="lightbox-img" />
              <button className="art-lightbox-close" onClick={() => setSelected(null)}>x</button>
            </div>
          </div>,
          document.body
        )}
      </div>
    </div>
  );
}

export default Devotion;
