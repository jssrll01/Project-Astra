import React from 'react';
import './SimplePage.css';
function Certifications() {
  const certs = [
    { title: 'FreeCodeCamp Responsive Web Design', status: 'In Progress' },
    { title: 'FreeCodeCamp JavaScript Algorithms', status: 'In Progress' },
    { title: 'AI for Everyone (DeepLearning.AI)', status: 'Planned' },
    { title: 'Google UX Design', status: 'Planned' }
  ];
  return (
    <div className="simple-page page">
      <div className="wrap">
        <header className="page-header reveal">
          <p className="eyebrow">Certifications</p>
          <h1>Learning Credentials</h1>
          <p>Courses and certifications I've completed or am working on.</p>
        </header>
        <div className="simple-grid">
          {certs.map((c, i) => (
            <div className="simple-card glass reveal" key={i}>
              <h3>{c.title}</h3>
              <span className="tag">{c.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Certifications;
