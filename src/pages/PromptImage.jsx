import React from 'react';
import './SimplePage.css';
import useCopy from '../hooks/useCopy';

function PromptImage() {
  const { copiedId, copy } = useCopy();

  const prompts = [
    { id: 'pi1', title: 'Cyberpunk Street', prompt: 'Neon-lit alley, rain, cyberpunk aesthetic, cinematic lighting' },
    { id: 'pi2', title: 'Minimal UI Concept', prompt: 'Minimalist dashboard UI, dark mode, soft shadows, teal accents' },
    { id: 'pi3', title: 'Portrait Sketch', prompt: 'Pencil sketch portrait, soft shading, artistic, high detail' },
    { id: 'pi4', title: 'Abstract Logo', prompt: 'Abstract geometric logo, flat design, gold and teal palette' },
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
export default PromptImage;
