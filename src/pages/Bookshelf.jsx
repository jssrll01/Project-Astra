import React from 'react';
import './SimplePage.css';

function Bookshelf() {
  return (
    <div className="simple-page page">
      <div className="wrap">
        <header className="page-header reveal">
          <p className="eyebrow">Bookshelf</p>
          <h1>What I'm Reading</h1>
          <p>Books that have shaped how I think about code, design, and life.</p>
        </header>
        <div className="empty-note reveal">Books will be added here soon.</div>
      </div>
    </div>
  );
}

export default Bookshelf;
