import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import useCounter from '../hooks/useCounter';
import './Home.css';

const QUOTES = [
  'Where Intelligence Meets Innovation.',
  'Where Vision Meets Innovation.',
  'Where Logic Meets Imagination.',
  'Where Vision Drives Creation.',
  'Where Creativity Meets Precision.',
];

function useTypewriterLoop(lines, typeSpeed = 55, eraseSpeed = 28, holdMs = 2600, gapMs = 400) {
  const [display, setDisplay] = useState('');
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState('typing');
  const idxRef = useRef(0);
  const current = lines[index];

  useEffect(() => {
    let timer;
    if (phase === 'typing') {
      if (idxRef.current < current.length) {
        timer = setTimeout(() => {
          idxRef.current++;
          setDisplay(current.slice(0, idxRef.current));
        }, typeSpeed);
      } else {
        timer = setTimeout(() => setPhase('holding'), 120);
      }
    } else if (phase === 'holding') {
      timer = setTimeout(() => setPhase('erasing'), holdMs);
    } else if (phase === 'erasing') {
      if (idxRef.current > 0) {
        timer = setTimeout(() => {
          idxRef.current--;
          setDisplay(current.slice(0, idxRef.current));
        }, eraseSpeed);
      } else {
        timer = setTimeout(() => {
          setIndex(i => (i + 1) % lines.length);
          setPhase('typing');
        }, gapMs);
      }
    }
    return () => clearTimeout(timer);
  }, [display, phase, current, lines.length, typeSpeed, eraseSpeed, holdMs, gapMs]);

  return display;
}

function Stat({ value, suffix, label }) {
  const [val, ref] = useCounter(value, 1100);
  return (
    <div className="stat" ref={ref}>
      <span className="stat-num">{val}{suffix}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

function Home() {
  const typed = useTypewriterLoop(QUOTES);

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-text">
            <h1 className="hero-name">Jessrell M. Custodio</h1>

            <div className="hero-meta">
              <span className="role">Programmer &bull; UI/UX Designer &bull; AI Music Composer</span>
            </div>

            <p className="tagline">
              {typed}
              <span className="cursor">|</span>
            </p>

            <p className="intro-text">
              I build with artificial intelligence — turning ideas into
              real-world web apps, intelligent tools, and creative experiments.
            </p>

            <div className="btnrow">
              <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
              <Link to="/about" className="btn btn-ghost">About Me</Link>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orbits">
              <div className="orbit o1"><span></span></div>
              <div className="orbit o2"><span></span></div>
              <div className="orbit o3"><span></span></div>
              <div className="photo">JC</div>
            </div>
          </div>
        </div>

        <div className="hero-stats">
          <Stat value={19} label="Years Old" />
          <Stat value={2} suffix="+" label="Years of Learning" />
          <Stat value={4} suffix="+" label="Projects" />
          <Stat value={5} suffix="+" label="AI Projects" />
        </div>
      </section>
    </div>
  );
}

export default Home;
