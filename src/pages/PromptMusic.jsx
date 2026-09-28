import React from 'react';
import './SimplePage.css';

function PromptMusic() {
  const prompts = [
    { title: 'Lo-fi Study Beat', prompt: 'Chill lo-fi hip hop, soft piano, vinyl crackle, 80 BPM, rainy day mood' },
    { title: 'Synthwave Drive', prompt: 'Retro 80s synthwave, heavy bass, arpeggiated leads, neon vibes' },
    { title: 'Cinematic Ambient', prompt: 'Ambient pads, distant choir, slow build, emotional cinematic' },
  ];
  return (
    <div className="simple-page page">
      <div className="wrap">
        <header className="page-header reveal">
          <p className="eyebrow">Prompt Engineering Lab — Music</p>
          <h1>Music Prompt Experiments</h1>
          <p>Structured prompts I use with AI music tools.</p>
        </header>
        <div className="prompt-list">
          {prompts.map((p, i) => (
            <div className="prompt-item card" key={i}>
              <h3>{p.title}</h3>
              <p className="prompt-text">{p.prompt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default PromptMusic;
