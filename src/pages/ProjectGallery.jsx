import React from 'react';
import './SimplePage.css';
function ProjectGallery() {
  return (
    <div className="simple-page page">
      <div className="wrap">
        <header className="page-header reveal">
          <p className="eyebrow">Project Gallery</p>
          <h1>Visual Showcase</h1>
          <p>A visual collection of screenshots, designs, and creative output.</p>
        </header>
        <div className="empty-note reveal">Images will be added as projects are completed.</div>
      </div>
    </div>
  );
}
export default ProjectGallery;
