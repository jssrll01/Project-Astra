import React from 'react';
import './SimplePage.css';

function Threads() {
  const threads = [
    { date: '10/10/2026', text: 'Introducing Project Astra where UI/UX highlighted' },
  ];

  return (
    <div className="simple-page page">
      <div className="wrap">
        <header className="page-header reveal">
          <p className="eyebrow">Threads</p>
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
