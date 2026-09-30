import React, { useEffect, useState } from 'react';
import './SimplePage.css';
import Img from '../components/Img';
import { preloadImages, preloadLightbox } from '../utils/preloadImages';

const games = [
  {
    name: 'Minecraft',
    platform: 'PC / Mobile',
    role: 'Builder, Explorer',
    since: '2020',
    hours: '500+',
    description: 'A sandbox world where I build, mine, and explore. My go-to for creative building and survival runs.',
    screenshots: [
      'https://res.cloudinary.com/bvw3okdf/image/upload/v1790749164/Screenshot_20260930_093954_Minecraft.jpg',
      'https://res.cloudinary.com/bvw3okdf/image/upload/v1790749165/Screenshot_20260925_222503_Minecraft.jpg',
    ],
  },
  { name: 'Mobile Legends', platform: 'Mobile', role: 'Player', since: '2019', hours: '300+', description: 'MOBA — fast matches, team strategy, and ranked climbs.', screenshots: [] },
  { name: 'Call of Duty Mobile', platform: 'Mobile', role: 'Player', since: '2021', hours: '200+', description: 'FPS — quick reflex-based matches, both BR and MP modes.', screenshots: [] },
  { name: 'Badminton', platform: 'Physical', role: 'Player', since: '2018', hours: '—', description: 'Not digital, but it belongs here — a sport that keeps me sharp and active.', screenshots: [] },
];

function GameSpace() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const all = games.flatMap(g => g.screenshots);
    preloadImages(all);
  }, []);

  const allShots = games.flatMap(g => g.screenshots.map(src => ({ src, game: g.name })));

  return (
    <div className="simple-page page">
      <div className="wrap">
        <header className="page-header reveal">
          <p className="eyebrow">Game Space</p>
          <h1>Where I Play</h1>
          <p>Games and gaming moments — the worlds I explore when I'm not building them.</p>
        </header>

        <div className="game-grid">
          {games.map((g) => (
            <div className="game-card card" key={g.name}>
              <h3>{g.name}</h3>
              <div className="game-meta">
                <span className="game-tag">{g.platform}</span>
                <span className="game-tag">{g.role}</span>
                {g.hours !== '—' && <span className="game-tag">{g.hours} hrs</span>}
              </div>
              <p>{g.description}</p>
            </div>
          ))}
        </div>

        {allShots.length > 0 && (
          <>
            <h2 className="section-h">Screenshots</h2>
            <div className="photo-grid">
              {allShots.map((s, i) => (
                <div className="photo-tile" key={i} onClick={() => setSelected(s)}>
                  <Img src={s.src} alt={s.game} width={600} />
                  <span className="photo-caption">{s.game}</span>
                </div>
              ))}
            </div>
          </>
        )}

        {selected && (
          <div className="art-lightbox" onClick={() => setSelected(null)}>
            <div className="art-lightbox-inner" onClick={(e) => e.stopPropagation()}>
              <img src={selected.src} alt={selected.game} className="lightbox-img" />
              <div className="art-lightbox-info">
                <p>{selected.game}</p>
              </div>
              <button className="art-lightbox-close" onClick={() => setSelected(null)}>×</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default GameSpace;
