import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import './SimplePage.css';
import Img from '../components/Img';

const games = [
  {
    name: 'Minecraft',
    platform: 'PC / Mobile',
    role: 'Builder, Explorer',
    since: '2020',
    hours: '500+',
    description: 'A sandbox world where I build, mine, and explore.',
    screenshots: [
      'https://res.cloudinary.com/bvw3okdf/image/upload/v1790749164/Screenshot_20260930_093954_Minecraft.jpg',
      'https://res.cloudinary.com/bvw3okdf/image/upload/v1790749165/Screenshot_20260925_222503_Minecraft.jpg',
    ],
  },
  { name: 'Mobile Legends', platform: 'Mobile', role: 'Player', since: '2019', hours: '300+', description: 'MOBA — fast matches, team strategy, and ranked climbs.', screenshots: [] },
  { name: 'Call of Duty Mobile', platform: 'Mobile', role: 'Player', since: '2021', hours: '200+', description: 'FPS — quick reflex-based matches.', screenshots: [] },
  { name: 'Badminton', platform: 'Physical', role: 'Player', since: '2018', hours: '—', description: 'A sport that keeps me sharp and active.', screenshots: [] },
];

function GameSpace() {
  const [selected, setSelected] = useState(null);
  const allShots = games.flatMap(g => g.screenshots.map(src => ({ src, game: g.name })));

  return (
    <div className="simple-page page">
      <div className="wrap">
        <header className="page-header reveal">
          <p className="eyebrow">Game Space</p>
          <h1>Where I Play</h1>
          <p>Games and gaming moments.</p>
        </header>

        <div className="game-grid">
          {games.map((g) => (
            <div className="game-card card" key={g.name}>
              <h3>{g.name}</h3>
              <div className="game-meta">
                <span className="game-tag">{g.platform}</span>
                <span className="game-tag">{g.role}</span>
              </div>
              <p>{g.description}</p>
            </div>
          ))}
        </div>

        {allShots.length > 0 && (
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
