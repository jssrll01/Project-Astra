import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import './SimplePage.css';
import Img from '../components/Img';

const photos = [
  { id: 1,  src: 'https://res.cloudinary.com/bvw3okdf/image/upload/v1790727121/Screenshot_20260930_080340_Chrome.jpg', caption: 'Gallery 01' },
  { id: 2,  src: 'https://res.cloudinary.com/bvw3okdf/image/upload/v1790727121/Screenshot_20260930_080404_Chrome.jpg', caption: 'Gallery 02' },
  { id: 3,  src: 'https://res.cloudinary.com/bvw3okdf/image/upload/v1790727120/Screenshot_20260930_080249_Chrome.jpg', caption: 'Gallery 03' },
  { id: 4,  src: 'https://res.cloudinary.com/bvw3okdf/image/upload/v1790727120/Screenshot_20260930_080322_Chrome.jpg', caption: 'Gallery 04' },
  { id: 5,  src: 'https://res.cloudinary.com/bvw3okdf/image/upload/v1790727120/Screenshot_20260930_080438_Chrome.jpg', caption: 'Gallery 05' },
  { id: 6,  src: 'https://res.cloudinary.com/bvw3okdf/image/upload/v1790727119/Screenshot_20260930_080412_Chrome.jpg', caption: 'Gallery 06' },
  { id: 7,  src: 'https://res.cloudinary.com/bvw3okdf/image/upload/v1790727118/Screenshot_20260930_080022_Chrome.jpg', caption: 'Gallery 07' },
  { id: 8,  src: 'https://res.cloudinary.com/bvw3okdf/image/upload/v1790727118/Screenshot_20260920_113600_Chrome.jpg', caption: 'Gallery 08' },
  { id: 9,  src: 'https://res.cloudinary.com/bvw3okdf/image/upload/v1790727118/Screenshot_20260930_080224_Chrome.jpg', caption: 'Gallery 09' },
  { id: 10, src: 'https://res.cloudinary.com/bvw3okdf/image/upload/v1790727118/Screenshot_20260930_080209_Chrome.jpg', caption: 'Gallery 10' },
  { id: 11, src: 'https://res.cloudinary.com/bvw3okdf/image/upload/v1790727118/Screenshot_20260920_113541_Chrome.jpg', caption: 'Gallery 11' },
  { id: 12, src: 'https://res.cloudinary.com/bvw3okdf/image/upload/v1790727118/Screenshot_20260930_080109_Chrome.jpg', caption: 'Gallery 12' },
  { id: 13, src: 'https://res.cloudinary.com/bvw3okdf/image/upload/v1790727117/Screenshot_20260920_082105_My_Files.jpg', caption: 'Gallery 13' },
];

function ProjectGallery() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="simple-page page">
      <div className="wrap">
        <header className="page-header reveal">
          <p className="eyebrow">Project Gallery</p>
        </header>

        <div className="photo-grid">
          {photos.map((p) => (
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

export default ProjectGallery;
