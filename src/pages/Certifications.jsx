import React, { useState } from 'react';
import './SimplePage.css';
import Img from '../components/Img';
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
          <h1>Learning Credentials</h1>
          <p>Courses and certifications I've completed or am working on.</p>
        </header>

        {certifications.length === 0 ? (
          <div className="empty-note reveal">Certifications will be added here soon.</div>
        ) : (
          <div className="photo-grid">
            {certifications.map((p) => (
              <div className="photo-tile" key={p.id} onClick={() => setSelected(p)}>
                <Img src={p.src} alt={p.caption} eager />
                <span className="photo-caption">{p.caption}</span>
              </div>
            ))}
          </div>
        )}

        {selected && (
          <div className="art-lightbox" onClick={() => setSelected(null)}>
            <div className="art-lightbox-inner" onClick={(e) => e.stopPropagation()}>
              <Img src={selected.src} alt={selected.caption} eager width={1400} />
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

export default Certifications;
