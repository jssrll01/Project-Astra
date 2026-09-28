import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <div className="nf-page">
      <div className="nf-stars" />
      <div className="nf-content">
        <div className="nf-code">404</div>
        <h1 className="nf-title">Lost in Space</h1>
        <p className="nf-text">
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>
        <div className="nf-actions">
          <Link to="/" className="btn btn-primary">Return Home</Link>
          <Link to="/contact" className="btn btn-ghost">Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
