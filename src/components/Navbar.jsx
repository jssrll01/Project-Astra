import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const primaryLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/collection', label: 'Collection' },
    { path: '/ai-music', label: 'AI Music' },
    { path: '/blog', label: 'Blog' },
    { path: '/threads', label: 'Threads' },
    { path: '/contact', label: 'Contact' },
  ];

  const secondaryLinks = [
    { path: '/partners', label: 'Partners' },
    { path: '/bookshelf', label: 'Bookshelf' },
    { path: '/archives', label: 'Archives' },
    { path: '/prompt-music', label: 'Prompt Lab (Music)' },
    { path: '/prompt-image', label: 'Prompt Lab (Image)' },
    { path: '/prompt-programming', label: 'Prompt Lab (Programming)' },
    { path: '/journey', label: 'Journey' },
    { path: '/docs', label: 'Docs' },
    { path: '/faq', label: 'FAQ' },
    { path: '/bookmarks', label: 'Bookmarks' },
    { path: '/library', label: 'Library' },
    { path: '/playground', label: 'Code Playground' },
    { path: '/certifications', label: 'Certifications' },
    { path: '/achievements', label: 'Achievements' },
    { path: '/game-space', label: 'Game Space' },
    { path: '/devotion', label: 'Devotion' },
  ];

  const hiddenLinks = [
    { path: '/settings', label: 'Settings' },
    { path: '/vault', label: 'Personal Vault' },
  ];

  const allLinks = [...primaryLinks, ...secondaryLinks, ...hiddenLinks];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="mark">Astra</Link>

        <button
          className={'menu-toggle ' + (menuOpen ? 'open' : '')}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className="hamburger"></span>
        </button>

        <ul className={'navlinks ' + (menuOpen ? 'active' : '')}>
          {allLinks.map(link => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={'nav-btn ' + (location.pathname === link.path ? 'active' : '')}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {menuOpen && <div className="nav-backdrop" onClick={() => setMenuOpen(false)} />}
    </nav>
  );
}

export default Navbar;
