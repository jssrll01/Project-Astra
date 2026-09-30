import React, { useState } from 'react';
import './SimplePage.css';

const achievements = [
  {
    id: 1,
    src: 'https://res.cloudinary.com/bvw3okdf/image/upload/v1790692518/Messenger_creation_F35F533B-F04C-45F1-B690-37A23002E63F.jpg',
    caption: 'Achievement',
  },
];

function Achievements() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="simple-page page">
      <div className="wrap">
        <header className="page-header reveal">
          <p className="eyebrow">Achievements</p>
          <h1>Milestones So Far</h1>
          <p>A record of accomplishments throughout my journey.</p>
        </header>

        {achievements.length === 0 ? (
          <div className="empty-note reveal">Achievements will be added here soon.</div>
        ) : (
          <div className="photo-grid">
            {achievements.map((p) => (
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

export default Achievements;
