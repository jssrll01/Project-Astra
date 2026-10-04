import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const LINKS = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/journey', label: 'Journey' },
  { path: '/projects', label: 'Projects' },
  { path: '/skills', label: 'Skills' },
  { path: '/certifications', label: 'Certifications' },
  { path: '/achievements', label: 'Achievements' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/collection', label: 'Collection' },
  { path: '/ai-music', label: 'AI Music' },
  { path: '/prompt-music', label: 'Prompt Lab — Music' },
  { path: '/prompt-image', label: 'Prompt Lab — Image' },
  { path: '/prompt-programming', label: 'Prompt Lab — Programming' },
  { path: '/bookmarks', label: 'Bookmarks' },
  { path: '/vault', label: 'Personal Vault' },
  { path: '/contact', label: 'Contact' },
  { path: '/settings', label: 'Settings' },
];

function Navbar() {
  const location = useLocation();

  useEffect(() => {
    const nav = document.querySelector('.navlinks');
    const toggle = document.querySelector('.menu-toggle');
    const backdrop = document.querySelector('.nav-backdrop');
    if (!nav || !toggle || !backdrop) return;

    function openMenu() {
      nav.classList.add('active');
      toggle.classList.add('open');
      backdrop.classList.add('show');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      nav.classList.remove('active');
      toggle.classList.remove('open');
      backdrop.classList.remove('show');
      document.body.style.overflow = '';
    }

    function toggleMenu() {
      if (nav.classList.contains('active')) {
        closeMenu();
      } else {
        openMenu();
      }
    }

    toggle.addEventListener('click', toggleMenu);
    backdrop.addEventListener('click', closeMenu);

    // Close on nav link click
    const navBtns = nav.querySelectorAll('.nav-btn');
    navBtns.forEach(function (b) { b.addEventListener('click', closeMenu); });

    // Store globally so route effect can close
    window.__astraClose = closeMenu;

    return () => {
      toggle.removeEventListener('click', toggleMenu);
      backdrop.removeEventListener('click', closeMenu);
      navBtns.forEach(function (b) { b.removeEventListener('click', closeMenu); });
      delete window.__astraClose;
    };
  }, []);

  // Close on route change
  useEffect(() => {
    if (window.__astraClose) window.__astraClose();
  }, [location.pathname]);

  return (
    <nav className="navbar">
      <Link to="/" className="mark">Astra</Link>

      <button
        type="button"
        className="menu-toggle"
        aria-label="Toggle menu"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <ul className="navlinks">
        {LINKS.map(l => (
          <li key={l.path}>
            <Link
              to={l.path}
              className={'nav-btn' + (location.pathname === l.path ? ' active' : '')}
            >
              {l.label}
            </Link>
          </li>
        ))}
        <li className="nav-footer">
          <span>© {new Date().getFullYear()} Astra</span>
        </li>
      </ul>

      <div className="nav-backdrop" />
    </nav>
  );
}

export default Navbar;
