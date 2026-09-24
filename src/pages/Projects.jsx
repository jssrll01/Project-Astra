import React from 'react';
import './SimplePage.css';
function Projects() {
  const projects = [
    { title: 'Astra Portfolio', description: 'This personal portfolio website built with React.', tags: ['React','CSS','JavaScript'], link: 'https://github.com/jssrll01' },
    { title: 'AI Music Experiments', description: 'Exploring AI tools to compose and experiment with music.', tags: ['AI','Music'], link: null },
    { title: 'UI/UX Design Concepts', description: 'Interface designs and user experience explorations.', tags: ['Figma','UI/UX'], link: null },
    { title: 'Future Projects', description: 'More projects are being planned and developed.', tags: ['Coming Soon'], link: 'https://github.com/jssrll01' }
  ];
  return (
    <div className="simple-page page">
      <div className="wrap">
        <header className="page-header reveal">
          <p className="eyebrow">Projects</p>
          <h1>What I'm Building</h1>
          <p>A collection of projects, experiments, and things I'm working on.</p>
        </header>
        <div className="simple-grid">
          {projects.map((p, i) => (
            <div className="simple-card glass reveal" key={i}>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="chips" style={{ marginTop: 12 }}>
                {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
              {p.link && <a href={p.link} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: 14, color: 'var(--teal)', fontSize: '0.9rem' }}>View on GitHub →</a>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Projects;
