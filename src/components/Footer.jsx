import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const socials = [
    { name: 'GitHub', url: 'https://github.com/jssrll01', icon: 'https://cdn.simpleicons.org/github/ffffff' },
    { name: 'Gmail', url: 'mailto:custodiojessrell07@gmail.com', icon: 'https://cdn.simpleicons.org/gmail/EA4335' },
    { name: 'Facebook', url: 'https://www.facebook.com/share/19NZJfifwE/', icon: 'https://cdn.simpleicons.org/facebook/1877F2' },
    { name: 'TikTok', url: 'https://tiktok.com/@sizzam_18', icon: 'https://cdn.simpleicons.org/tiktok/ffffff' },
    { name: 'X', url: 'https://x.com/astrater07', icon: 'https://cdn.simpleicons.org/x/ffffff' },
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <span className="footer-mark">Astra</span>
          <p className="footer-tagline">Where Intelligence Meets Innovation.</p>
          <p className="footer-desc">
            A digital space for AI experiments, code, and design — built to grow
            with every project.
          </p>
          <div className="footer-socials">
            {socials.map(s => (
              <a key={s.name} href={s.url} target={s.url.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer" aria-label={s.name} className="footer-social">
                <img src={s.icon} alt={s.name} width="15" height="15" loading="lazy" onError={(e)=>{e.target.style.display='none';}} />
              </a>
            ))}
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <h4>Navigate</h4>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/ai-music">AI Music</Link>
          </div>
          <div className="footer-col">
            <h4>Explore</h4>
            <Link to="/partners">Partners</Link>
            <Link to="/resources">Resources</Link>
            <Link to="/archives">Archives</Link>
            <Link to="/journey">Journey</Link>
            <Link to="/blog">Blog</Link>
          </div>
          <div className="footer-col">
            <h4>Labs</h4>
            <Link to="/prompt-music">Prompt Lab (Music)</Link>
            <Link to="/prompt-image">Prompt Lab (Image)</Link>
            <Link to="/prompt-programming">Prompt Lab (Programming)</Link>
            <Link to="/certifications">Certifications</Link>
            <Link to="/achievements">Achievements</Link>
          </div>
          <div className="footer-col">
            <h4>About</h4>
            <p className="footer-about-text">
              Astra is a personal showcase built to display creative and technical
              projects — where ideas, code, and design come together.
            </p>
            </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Astra. All rights reserved.</p>
        <p className="footer-quote">"The best way to predict the future is to create it."</p>
      </div>
    </footer>
  );
}

export default Footer;
