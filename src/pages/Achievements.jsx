import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import './SimplePage.css';
import Img from '../components/Img';

const achievements = [
  { id: 1, src: 'https://res.cloudinary.com/bvw3okdf/image/upload/v1790692518/Messenger_creation_F35F533B-F04C-45F1-B690-37A23002E63F.jpg', caption: 'Achievement' },
  { id: 2, src: 'https://res.cloudinary.com/bvw3okdf/image/upload/v1790692470/Messenger_creation_5F992C73-5D0F-4A8B-BBDD-9CE642D2F697.jpg', caption: 'Achievement 2' },
];

function Achievements() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="simple-page page">
      <div className="wrap">
        <header className="page-header reveal">
          <p className="eyebrow">Achievements</p>
        </header>

        <div className="photo-grid">
          {achievements.map((p) => (
            <div className="photo-tile" key={p.id} onClick={() => setSelected(p)}>
              <Img src={p.src} alt={p.caption} />
            </div>
          ))}
        </div>

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

export default Achievements;
