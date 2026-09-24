import React from 'react';
import './SimplePage.css';
function PromptMusic() {
  const prompts = [
    { title: 'Skate Avenue PH Style (Rock Cover Energy)', prompt: 'Create a pop-punk/rock cover-style track with energetic distorted guitars, punchy bass, and steady upbeat drums. Use a male or gender-neutral vocal with a slightly gritty tone and occasional soft falsetto on emotional phrases. Keep the delivery melodic, expressive, and youthful. Production should feel polished but with DIY rock rawness. Theme: longing and emotional confession. Structure: verse to pre-chorus to explosive chorus to verse to chorus to bridge to final chorus.' },
    { title: 'Taglish Emo Pop-Punk Version', prompt: 'Generate a Taglish pop-punk track with crunchy guitar riffs, energetic drums, and a driving bassline. Vocals should sound emotional but controlled, with light falsetto on the highest notes for added angst. Theme: heartbreak, regret, and hope. Structure: verse to chorus to verse to chorus to bridge to final chorus.' },
    { title: 'Emotional Rock Cover w/ Soft Falsetto', prompt: 'Produce a rock cover with a warm, slightly overdriven guitar tone and mid-tempo drums. Vocals clean with occasional airy falsetto. Theme: love, distance, and longing.' },
    { title: 'High-Energy Pop-Punk Anthem', prompt: 'Create a fast, energetic pop-punk track with chugging guitars, crisp snare, and bright cymbals. Theme: determination and emotional release.' },
    { title: 'Skate Avenue PH-Inspired Rock Ballad', prompt: 'Make a rock ballad with emotional electric guitars, light distortion, and steady rock drums. Theme: lost love, hope, and reflection.' }
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
export default PromptMusic;
