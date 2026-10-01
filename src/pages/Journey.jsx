import React from 'react';
import './SimplePage.css';

function Journey() {
  const milestones = [
    { year: '2025', title: 'Started BSIT', desc: 'Began exploring programming fundamentals.' },
    { year: '2025-2026', title: 'Web & Design', desc: 'Experimented with web development and UI/UX.' },
    { year: '2026', title: 'AI-Assisted Development', desc: 'Started exploring AI-assisted development and AI music composition.' },
    { year: '2026', title: 'Project Astra', desc: 'Built a personal portfolio and technology ecosystem.' },
    { year: '2026', title: 'Xmarket', desc: 'E-commerce and digital marketplace platform.' },
    { year: '2026', title: 'Xonline Wallet', desc: 'Digital wallet for finance and payments.' },
    { year: '2026', title: 'Pricee', desc: 'Business and e-commerce pricing tool.' },
    { year: '2026', title: 'Xentrepreneur', desc: 'Business and course platform.' },
    { year: '2026', title: 'ReceiptX', desc: 'Business and receipt management tool.' },
    { year: 'Future', title: 'Larger Projects', desc: 'Building larger and more innovative technology projects.' },
  ];

  return (
    <div className="simple-page page">
      <div className="wrap">
        <header className="page-header reveal">
          <p className="eyebrow">Development Journey</p>
        </header>
        <div className="timeline">
          {milestones.map((m, i) => (
            <div className={'timeline-item reveal reveal-delay-' + ((i % 3) + 1)} key={m.year + m.title}>
              <div className="timeline-dot"></div>
              <div className="timeline-content glass">
                <span className="timeline-year">{m.year}</span>
                <h3>{m.title}</h3>
                <p>{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Journey;
