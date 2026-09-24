import React from 'react';
import './SimplePage.css';
function PromptImage() {
  const prompts = [
    { title: 'Cyberpunk Street', prompt: 'Neon-lit alley, rain, cyberpunk aesthetic, cinematic lighting' },
    { title: 'Minimal UI Concept', prompt: 'Minimalist dashboard UI, dark mode, soft shadows, teal accents' },
    { title: 'Portrait Sketch', prompt: 'Pencil sketch portrait, soft shading, artistic, high detail' },
    { title: 'Abstract Logo', prompt: 'Abstract geometric logo, flat design, gold and teal palette' }
  ];
  return (
    <div className="simple-page page">
      <div className="wrap">
        <header className="page-header reveal">
          <p className="eyebrow">Prompt Engineering Lab — Image</p>
          <h1>Image Prompt Experiments</h1>
          <p>Prompts I use for AI image generation and visual design.</p>
        </header>
        <div className="prompt-list">
          {prompts.map((p, i) => (
            <div className={'prompt-item glass reveal reveal-delay-' + ((i % 3) + 1)} key={p.title}>
              <h3>{p.title}</h3>
              <p className="prompt-text">{p.prompt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default PromptImage;
