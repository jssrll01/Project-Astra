import React from 'react';
import './SimplePage.css';

function Threads() {
  const threads = [
    { date: '12/15/2025', text: 'I was starting my new project.' },
    { date: '12/20/2025', text: 'Learning that mistakes are just part of the process.' },
    { date: '01/03/2026', text: 'Every small step counts when building something meaningful.' },
  ];

  return (
    <div className="simple-page page">
      <div className="wrap">
        <header className="page-header reveal">
          <p className="eyebrow">Threads</p>
          <h1>Thoughts in Passing</h1>
          <p>Short updates, ideas, and moments from my journey.</p>
        </header>

        <div className="thread-list">
          {threads.map((t, i) => (
            <div className="thread-card card" key={i}>
              <span className="thread-date">{t.date}</span>
              <p>{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Threads;
