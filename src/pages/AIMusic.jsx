import React from 'react';
import './SimplePage.css';

function AIMusic() {
  const tracks = [
    { title: 'Your Name', src: 'https://res.cloudinary.com/bvw3okdf/video/upload/v1790598382/Your_Name.mp3' },
    { title: 'Your Name (Remastered)', src: 'https://res.cloudinary.com/bvw3okdf/video/upload/v1790598383/Your_Name_Remastered.mp3' },
    { title: 'For a Little While', src: 'https://res.cloudinary.com/bvw3okdf/video/upload/v1790598382/For_a_Little_While.mp3' },
    { title: 'For a Little While (Remastered)', src: 'https://res.cloudinary.com/bvw3okdf/video/upload/v1790598382/For_a_Little_While_Remastered.mp3.mp3' },
    { title: 'Unfaded', src: 'https://res.cloudinary.com/bvw3okdf/video/upload/v1790598382/Unfaded.mp3' },
  ];

  return (
    <div className="simple-page page">
      <div className="wrap">
        <header className="page-header reveal">
          <p className="eyebrow">AI Music</p>
          <h1>Composed with Intelligence</h1>
          <p>Tracks I've created using AI-assisted composition tools.</p>
        </header>

        <div className="track-list">
          {tracks.map((t) => (
            <div className="track-card card" key={t.title}>
              <div className="track-info">
                <span className="track-icon">♪</span>
                <h3>{t.title}</h3>
              </div>
              <audio controls preload="none" src={t.src}>
                Your browser does not support the audio element.
              </audio>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AIMusic;
