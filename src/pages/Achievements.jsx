import React from 'react';
import './SimplePage.css';
function Achievements() {
  const items = [
    { title: 'BSIT Student', desc: 'Enrolled at Mindoro State University - Calapan Campus.' },
    { title: 'Self-Taught Developer', desc: 'Learned HTML, CSS, JavaScript, Python independently.' },
    { title: 'AI Music Composer', desc: 'Produced experimental AI-assisted music tracks.' },
    { title: 'Portfolio Launch', desc: 'Designed and deployed this personal portfolio.' }
  ];
  return (
    <div className="simple-page page">
      <div className="wrap">
        <header className="page-header reveal">
          <p className="eyebrow">Achievements</p>
          <h1>Milestones So Far</h1>
          <p>A record of accomplishments throughout my journey.</p>
        </header>
        <div className="simple-grid">
          {items.map((item, i) => (
            <div className="simple-card glass reveal" key={i}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Achievements;
