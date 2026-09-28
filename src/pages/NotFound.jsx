import React from 'react';
import { Link } from 'react-router-dom';
import './SimplePage.css';

function NotFound() {
  return (
    <div className="simple-page page">
      <div className="wrap not-found-wrap">
        <div className="not-found-code">404</div>
        <h1>Page Not Found</h1>
        <p>The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="btn btn-primary">Return Home</Link>
      </div>
    </div>
  );
}

export default NotFound;
