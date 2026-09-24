import React from 'react';
import './SimplePage.css';

function Blog() {
  return (
    <div className="simple-page page">
      <div className="wrap">
        <header className="page-header reveal">
          <p className="eyebrow">Blog</p>
          <h1>Thoughts &amp; Writing</h1>
          <p>Notes on tech, learning, design, and my journey as a developer.</p>
        </header>
        <div className="empty-note reveal">Posts will appear here soon.</div>
      </div>
    </div>
  );
}
export default Blog;
