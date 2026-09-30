import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import './SimplePage.css';
import Img from '../components/Img';

const certifications = [
  {
    id: 1,
    src: 'https://res.cloudinary.com/bvw3okdf/image/upload/v1790692470/Messenger_creation_5F992C73-5D0F-4A8B-BBDD-9CE642D2F697.jpg',
    caption: 'Certification',
  },
];

function Certifications() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="simple-page page">
      <div className="wrap">
        <header className="page-header reveal">
          <p className="eyebrow">Certifications</p>
        </header>

        <div className="photo-grid">
          {certifications.map((p) => (
            <div className="photo-tile" key={p.id} onClick={() => setSelected(p)}>
              <Img src={p.src} alt={p.caption} eager />
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

export default Certifications;
