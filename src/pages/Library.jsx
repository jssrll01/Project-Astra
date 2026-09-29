import React from 'react';
import './SimplePage.css';

function Library() {
  return (
    <div className="simple-page page">
      <div className="wrap">
        <header className="page-header reveal">
          <p className="eyebrow">Library</p>
          <h1>Modules &amp; Courses</h1>
          <p>The BSIT curriculum I'm working through at Mindoro State University.</p>
        </header>
        <div className="empty-note reveal">Modules and courses will be added here soon.</div>
      </div>
    </div>
  );
}

export default Library;
