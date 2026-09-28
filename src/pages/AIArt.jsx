import React, { useState } from 'react';
import './SimplePage.css';

const artworks = [
  { id: 1, title: 'Neon District', src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800', tag: 'Cyberpunk', description: 'AI-generated cyberpunk street scene.' },
  { id: 2, title: 'Silent Orbit', src: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800', tag: 'Space', description: 'Abstract space composition.' },
  { id: 3, title: 'Paper City', src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800', tag: 'Architecture', description: 'AI-generated architectural study.' },
  { id: 4, title: 'Dream Sequence', src: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=800', tag: 'Abstract', description: 'Surreal AI composition.' },
  { id: 5, title: 'Fragments', src: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800', tag: 'Abstract', description: 'Generative abstract pattern.' },
  { id: 6, title: 'Digital Bloom', src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800', tag: 'Nature', description: 'AI interpretation of organic forms.' },
];

function AIArt() {
  const [selected, setSelected] = useState(null);

  const download = (art) => {
    const ok = window.confirm('Download "' + art.title + '"?\n\nA new tab will open with the image.');
    if (!ok) return;
    window.open(art.src, '_blank', 'noopener');
  };

  return (
    <div className="simple-page page">
      <div className="wrap">
        <header className="page-header reveal">
          <p className="eyebrow">AI Art Gallery</p>
          <h1>Visual Experiments</h1>
          <p>A collection of AI-generated artwork, explorations, and creative studies.</p>
        </header>

        <div className="art-grid">
          {artworks.map((art) => (
            <div className="art-card card" key={art.id}>
              <div className="art-thumb" onClick={() => setSelected(art)}>
                <img src={art.src} alt={art.title} loading="lazy" />
                <span className="art-tag">{art.tag}</span>
              </div>
              <div className="art-info">
                <h3>{art.title}</h3>
                <p>{art.description}</p>
                <button className="art-download" onClick={() => download(art)} aria-label="Download">
                  ⤓
                </button>
              </div>
            </div>
          ))}
        </div>

        {selected && (
          <div className="art-lightbox" onClick={() => setSelected(null)}>
            <div className="art-lightbox-inner" onClick={(e) => e.stopPropagation()}>
              <img src={selected.src} alt={selected.title} />
              <div className="art-lightbox-info">
                <h3>{selected.title}</h3>
                <p>{selected.description}</p>
              </div>
              <button className="art-lightbox-close" onClick={() => setSelected(null)}>×</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AIArt;
