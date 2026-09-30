import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import './SimplePage.css';
import Img from '../components/Img';

const games = [
  {
    name: 'Minecraft',
    screenshots: [
      'https://res.cloudinary.com/bvw3okdf/image/upload/v1790749164/Screenshot_20260930_093954_Minecraft.jpg',
      'https://res.cloudinary.com/bvw3okdf/image/upload/v1790749165/Screenshot_20260925_222503_Minecraft.jpg',
    ],
  },
];

function GameSpace() {
  const [selected, setSelected] = useState(null);
  const allShots = games.flatMap(g => g.screenshots.map(src => ({ src, game: g.name })));

  return (
    <div className="simple-page page">
      <div className="wrap">
        <header className="page-header reveal">
          <p className="eyebrow">Game Space</p>
        </header>

        {allShots.length === 0 ? (
          <div className="empty-note reveal">Screenshots will be added here soon.</div>
        ) : (
          <div className="photo-grid">
            {allShots.map((s, i) => (
              <div className="photo-tile" key={i} onClick={() => setSelected(s)}>
                <Img src={s.src} alt={s.game} />
              </div>
            ))}
          </div>
        )}

        {selected && createPortal(
          <div className="art-lightbox" onClick={() => setSelected(null)}>
            <div className="art-lightbox-inner" onClick={(e) => e.stopPropagation()}>
              <img src={selected.src} alt={selected.game} className="lightbox-img" />
              <button className="art-lightbox-close" onClick={() => setSelected(null)}>x</button>
            </div>
          </div>,
          document.body
        )}
      </div>
    </div>
  );
}

export default GameSpace;
