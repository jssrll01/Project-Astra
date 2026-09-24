import React from 'react';
import './SimplePage.css';
function Resources() {
  const categories = [
    { title: 'Soft Copy Modules', items: ['Introduction to Programming','Data Structures and Algorithms','Web Development Fundamentals','Database Management Systems'] },
    { title: 'Websites', items: ['MDN Web Docs','freeCodeCamp','React Docs','The Odin Project'] },
    { title: 'Applications', items: ['Visual Studio Code','Figma','Git & GitHub','Suno AI'] }
  ];
  return (
    <div className="simple-page page">
      <div className="wrap">
        <header className="page-header reveal">
          <p className="eyebrow">Resources</p>
          <h1>What I Learn From</h1>
          <p>Modules, websites, and apps that power my learning journey.</p>
        </header>
        <div className="simple-grid">
          {categories.map((cat, i) => (
            <div className={'simple-card glass reveal reveal-delay-' + (i + 1)} key={cat.title}>
              <h3>{cat.title}</h3>
              <ul className="resource-list">
                {cat.items.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Resources;
