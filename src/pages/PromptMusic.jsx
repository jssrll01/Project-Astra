import React from 'react';
import './SimplePage.css';
import useCopy from '../hooks/useCopy';

function PromptMusic() {
  const { copiedId, copy } = useCopy();

  const prompts = [
    { id: 'pm1', title: 'Skate Avenue PH Style (Rock Cover Energy)', prompt: 'Create a pop-punk/rock cover-style track with energetic distorted guitars, punchy bass, and steady upbeat drums. Use a male or gender-neutral vocal with a slightly gritty tone and occasional soft falsetto on emotional phrases. Keep the delivery melodic, expressive, and youthful. Production should feel polished but with DIY rock rawness. Theme: longing and emotional confession. Structure: verse to pre-chorus to explosive chorus to verse to chorus to bridge to final chorus. Give the track the same emotional energy and brightness as modern pop-punk reinterpretations of classic songs.' },
    { id: 'pm2', title: 'Taglish Emo Pop-Punk Version', prompt: 'Generate a Taglish pop-punk track with crunchy guitar riffs, energetic drums, and a driving bassline. Vocals should sound emotional but controlled, with light falsetto on the highest notes for added angst. Maintain an anthemic, catchy chorus. Theme: heartbreak, regret, and hope. Style should resemble a modern Filipino pop-punk reinterpretation of a sentimental hit. Structure: verse to chorus to verse to chorus to bridge to final chorus.' },
    { id: 'pm3', title: 'Emotional Rock Cover w/ Soft Falsetto', prompt: 'Produce a rock cover with a warm, slightly overdriven guitar tone and mid-tempo drums. Vocals should be clean with occasional airy falsetto to emphasize emotional lines. Keep the sound atmospheric but still energetic. Use layered harmonies in the chorus. Theme: love, distance, and longing. Modern emo-rock aesthetic with smooth transitions and a dynamic final chorus.' },
    { id: 'pm4', title: 'High-Energy Pop-Punk Anthem', prompt: 'Create a fast, energetic pop-punk track with chugging guitars, crisp snare, and bright cymbals. Vocal style should be youthful, expressive, and slightly raspy, with a few falsetto touches on sustained notes. The chorus should feel powerful and anthem-like. Theme: determination and emotional release. Polished but raw rock-band vibe.' },
    { id: 'pm5', title: 'Skate Avenue PH-Inspired Rock Ballad', prompt: 'Make a rock ballad with emotional electric guitars, light distortion, and steady rock drums. Vocals should be heartfelt with a clean tone, subtle rasp, and soft falsetto in the chorus. The song should mix gentleness in the verses with a more powerful chorus. Style inspired by pop-punk bands doing emotional slow covers. Theme: lost love, hope, and reflection.' },
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
          {prompts.map((p) => (
            <div className="prompt-item card" key={p.id}>
              <div className="prompt-header">
                <h3>{p.title}</h3>
                <button
                  className={'copy-btn' + (copiedId === p.id ? ' copied' : '')}
                  onClick={() => copy(p.prompt, p.id)}
                  aria-label="Copy prompt"
                >
                  {copiedId === p.id ? (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      Copied
                    </>
                  ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                      </svg>
                      Copy
                    </>
                  )}
                </button>
              </div>
              <p className="prompt-text">{p.prompt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default PromptMusic;
