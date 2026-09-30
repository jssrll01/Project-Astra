import React, { useState } from 'react';
import './SimplePage.css';
import Img from '../components/Img';
import { preloadImages } from '../utils/preloadImages';

const photos = [
  { id: 1, src: 'https://res.cloudinary.com/bvw3okdf/image/upload/v1790689227/Messenger_creation_E7A34F76-00FA-4627-BADD-61F04072D22D.jpg', caption: 'Moments — 01' },
  { id: 2, src: 'https://res.cloudinary.com/bvw3okdf/image/upload/v1790689227/Messenger_creation_65B44506-DAF5-411A-BAA7-8FD2F42D47F8.jpg', caption: 'Moments — 02' },
  { id: 3, src: 'https://res.cloudinary.com/bvw3okdf/image/upload/v1790689227/LivePhoto_1790477088349_MP.jpg', caption: 'Moments — 03' },
  { id: 4, src: 'https://res.cloudinary.com/bvw3okdf/image/upload/v1790689220/20260927_104326.jpg', caption: 'Moments — 04' },
  { id: 5, src: 'https://res.cloudinary.com/bvw3okdf/image/upload/v1790689218/20260929_141627.jpg', caption: 'Moments — 05' },
  { id: 6, src: 'https://res.cloudinary.com/bvw3okdf/image/upload/v1790689220/20260927_104208.jpg', caption: 'Moments — 06' },
  { id: 7, src: 'https://res.cloudinary.com/bvw3okdf/image/upload/v1790689219/LivePhoto_1790476474170_MP.jpg', caption: 'Moments — 07' },
  { id: 8, src: 'https://res.cloudinary.com/bvw3okdf/image/upload/v1790689220/20260927_103247.jpg', caption: 'Moments — 08' },
  { id: 9, src: 'https://res.cloudinary.com/bvw3okdf/image/upload/v1790689218/20260927_105111.jpg', caption: 'Moments — 09' },
  { id: 10, src: 'https://res.cloudinary.com/bvw3okdf/image/upload/v1790689217/20260927_105051.jpg', caption: 'Moments — 10' },
  { id: 11, src: 'https://res.cloudinary.com/bvw3okdf/image/upload/v1790689217/20260915_084029.jpg', caption: 'Moments — 11' },
  { id: 12, src: 'https://res.cloudinary.com/bvw3okdf/image/upload/v1790689217/20260915_084051.jpg', caption: 'Moments — 12' },
  { id: 13, src: 'https://res.cloudinary.com/bvw3okdf/image/upload/v1790689216/20260911_121428.jpg', caption: 'Moments — 13' },
  { id: 14, src: 'https://res.cloudinary.com/bvw3okdf/image/upload/v1790689217/20260926_120736.jpg', caption: 'Moments — 14' },
  { id: 15, src: 'https://res.cloudinary.com/bvw3okdf/image/upload/v1790689216/20260911_125359.jpg', caption: 'Moments — 15' },
  { id: 16, src: 'https://res.cloudinary.com/bvw3okdf/image/upload/v1790689217/20260915_193932.jpg', caption: 'Moments — 16' },
  { id: 17, src: 'https://res.cloudinary.com/bvw3okdf/image/upload/v1790689217/20260927_104954.jpg', caption: 'Moments — 17' },
  { id: 18, src: 'https://res.cloudinary.com/bvw3okdf/image/upload/v1790689216/20260915_053749.jpg', caption: 'Moments — 18' },
  { id: 19, src: 'https://res.cloudinary.com/bvw3okdf/image/upload/v1790689216/20260911_110317.jpg', caption: 'Moments — 19' },
  { id: 20, src: 'https://res.cloudinary.com/bvw3okdf/image/upload/v1790692087/Messenger_creation_97341421-AA6A-4CA6-B905-0ECC86B5B742.jpg', caption: 'Moments — 20' },
  { id: 21, src: 'https://res.cloudinary.com/bvw3okdf/image/upload/v1790692087/20260911_125124.jpg', caption: 'Moments — 21' },
  { id: 22, src: 'https://res.cloudinary.com/bvw3okdf/image/upload/v1790747514/20260915_141227.jpg', caption: 'Moments — 22' },
  { id: 23, src: 'https://res.cloudinary.com/bvw3okdf/image/upload/v1790747514/20260915_144411.jpg', caption: 'Moments — 23' },
  { id: 24, src: 'https://res.cloudinary.com/bvw3okdf/image/upload/v1790747514/20260915_142756.jpg', caption: 'Moments — 24' },
  { id: 25, src: 'https://res.cloudinary.com/bvw3okdf/image/upload/v1790747515/20260915_144417.jpg', caption: 'Moments — 25' },
  { id: 26, src: 'https://res.cloudinary.com/bvw3okdf/image/upload/v1790747515/20260915_150237.jpg', caption: 'Moments — 26' },
  { id: 27, src: 'https://res.cloudinary.com/bvw3okdf/image/upload/v1790747515/20260915_144440.jpg', caption: 'Moments — 27' },
  { id: 28, src: 'https://res.cloudinary.com/bvw3okdf/image/upload/v1790747516/20260915_150741.jpg', caption: 'Moments — 28' },
];

// Kick off preloading immediately — before React renders
photos.forEach(p => {
  const img = new window.Image();
  img.decoding = "async";
  img.loading = "eager";
  img.src = p.src.replace("/upload/", "/upload/f_auto,q_auto,w_800/");
});

function Collection() {
  React.useEffect(() => { preloadImages(photos.map(p => p.src)); }, []);
  const [selected, setSelected] = useState(null);

  return (
    <div className="simple-page page">
      <div className="wrap">
        <header className="page-header reveal">
          <p className="eyebrow">Collection</p>
          <h1>Moments &amp; Visuals</h1>
          <p>Photos and visuals I've captured or created.</p>
        </header>

        <div className="photo-grid">
          {photos.map((p) => (
            <div className="photo-tile" key={p.id} onClick={() => setSelected(p)}>
              <Img src={p.src} alt={p.caption} eager={p.id <= 4} />
              <span className="photo-caption">{p.caption}</span>
            </div>
          ))}
        </div>

        {selected && (
          <div className="art-lightbox" onClick={() => setSelected(null)}>
            <div className="art-lightbox-inner" onClick={(e) => e.stopPropagation()}>
              <Img src={selected.src} alt={selected.caption} width={1400} aspect="auto" />
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

export default Collection;
