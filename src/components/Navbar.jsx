import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll and blur background when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('burger-open');
    } else {
      document.body.style.overflow = '';
      document.body.classList.remove('burger-open');
    }
    return () => {
      document.body.style.overflow = '';
      document.body.classList.remove('burger-open');
    };
  }, [menuOpen]);

  const links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/journey', label: 'Journey' },
    { path: '/projects', label: 'Projects' },
    { path: '/skills', label: 'Skills' },
    { path: '/certifications', label: 'Certifications' },
    { path: '/achievements', label: 'Achievements' },
    { path: '/partners', label: 'Partners' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/collection', label: 'Collection' },
    { path: '/ai-music', label: 'AI Music' },
    { path: '/game-space', label: 'Game Space' },
    { path: '/prompt-music', label: 'Prompt Lab — Music' },
    { path: '/prompt-image', label: 'Prompt Lab — Image' },
    { path: '/prompt-programming', label: 'Prompt Lab — Programming' },
    { path: '/blog', label: 'Blog' },
    { path: '/threads', label: 'Threads' },
    { path: '/bookshelf', label: 'Bookshelf' },
    { path: '/bookmarks', label: 'Bookmarks' },
    { path: '/library', label: 'Library' },
    { path: '/archives', label: 'Archives' },
    { path: '/devotion', label: 'Devotion' },
    { path: '/vault', label: 'Personal Vault' },
    { path: '/docs', label: 'Documentation' },
    { path: '/faq', label: 'FAQ' },
    { path: '/contact', label: 'Contact' },
    { path: '/settings', label: 'Settings' },
  ];

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
          {links.map(link => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={'nav-btn ' + (location.pathname === link.path ? 'active' : '')}
                onClick={() => setMenuOpen(false)}
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
