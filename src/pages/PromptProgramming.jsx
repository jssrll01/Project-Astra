import React from 'react';
import './SimplePage.css';

function PromptProgramming() {
  const prompts = [
    { title: 'Component Generator', prompt: 'Create a reusable React button component with variants and hover states.' },
    { title: 'Code Review', prompt: 'Review this function for bugs, performance, and readability.' },
    { title: 'Refactor Helper', prompt: 'Refactor this code into smaller, testable functions with JSDoc.' },
  ];
  return (
    <div className="simple-page page">
      <div className="wrap">
        <header className="page-header reveal">
          <p className="eyebrow">Prompt Engineering Lab — Programming</p>
          <h1>Programming Prompt Experiments</h1>
          <p>How I use AI to assist with code.</p>
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
export default PromptProgramming;
