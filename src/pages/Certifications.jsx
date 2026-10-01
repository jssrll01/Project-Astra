import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import './SimplePage.css';
import Img from '../components/Img';

const certifications = [
  { id: 1, src: 'https://res.cloudinary.com/bvw3okdf/image/upload/v1790851174/AI_Power_User_Launchpad_Certificate.jpg', caption: 'AI Power User Launchpad' },
  { id: 2, src: 'https://res.cloudinary.com/bvw3okdf/image/upload/v1790851175/Find_Insights_with_AI_Certificate.jpg', caption: 'Find Insights with AI' },
  { id: 3, src: 'https://res.cloudinary.com/bvw3okdf/image/upload/v1790851176/Data_Science_Essentials_with_Python_Certificate.jpg', caption: 'Data Science Essentials with Python' },
  { id: 4, src: 'https://res.cloudinary.com/bvw3okdf/image/upload/v1790851176/Introduction_to_Modern_AI_Certificate.jpg', caption: 'Introduction to Modern AI' },
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

export default Certifications;
