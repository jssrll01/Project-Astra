import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const navigateLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/ai-music', label: 'AI Music' },
  ];

  const exploreLinks = [
    { path: '/journey', label: 'Journey' },
  ];

  const labsLinks = [
    { path: '/prompt-music', label: 'Prompt Lab (Music)' },
    { path: '/prompt-image', label: 'Prompt Lab (Image)' },
    { path: '/prompt-programming', label: 'Prompt Lab (Programming)' },
    { path: '/certifications', label: 'Certifications' },
    { path: '/achievements', label: 'Achievements' },
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="footer-mark">Astra</div>
          <p className="footer-tagline">Where Intelligence Meets Innovation</p>
          <p className="footer-desc">
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <h4>Navigate</h4>
            {navigateLinks.map(l => (
              <Link key={l.path} to={l.path}>{l.label}</Link>
            ))}
          </div>

          <div className="footer-col">
            <h4>Explore</h4>
            {exploreLinks.map(l => (
              <Link key={l.path} to={l.path}>{l.label}</Link>
            ))}
          </div>

          <div className="footer-col">
            <h4>Labs</h4>
            {labsLinks.map(l => (
              <Link key={l.path} to={l.path}>{l.label}</Link>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Astra — Jessrell M. Custodio</p>
        <p className="footer-quote">Where Intelligence Meets Innovation.</p>
      </div>
    </footer>
  );
}

export default Footer;
