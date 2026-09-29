import React from 'react';
import './SimplePage.css';

function Bookmarks() {
  return (
    <div className="simple-page page">
      <div className="wrap">
        <header className="page-header reveal">
          <p className="eyebrow">Bookmarks</p>
          <h1>Links I Actually Use</h1>
          <p>Curated resources, tools, and sites I return to often.</p>
        </header>
        <div className="empty-note reveal">Bookmarks will be added here soon.</div>
      </div>
    </div>
  );
}

export default Bookmarks;
