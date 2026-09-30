import React from 'react';
import './SimplePage.css';

function Bookshelf() {
  return (
    <div className="simple-page page">
      <div className="wrap">
        <header className="page-header reveal">
          <p className="eyebrow">Bookshelf</p>
        </header>
        <div className="empty-note reveal">Books will be added here soon.</div>
      </div>
    </div>
  );
}

export default Bookshelf;
