import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './SimplePage.css';
import './AIMusic.css';

const tracks = [
  { slug: 'your-name', title: 'Your Name', artist: 'Astra', mood: 'emotional', src: 'https://res.cloudinary.com/bvw3okdf/video/upload/v1790598382/Your_Name.mp3' },
  { slug: 'your-name-remastered', title: 'Your Name (Remastered)', artist: 'Astra', mood: 'emotional', src: 'https://res.cloudinary.com/bvw3okdf/video/upload/v1790598383/Your_Name_Remastered.mp3' },
  { slug: 'for-a-little-while', title: 'For a Little While', artist: 'Astra ft Shao', mood: 'collab', src: 'https://res.cloudinary.com/bvw3okdf/video/upload/v1790598382/For_a_Little_While.mp3' },
  { slug: 'for-a-little-while-remastered', title: 'For a Little While (Remastered)', artist: 'Astra ft Shao', mood: 'collab', src: 'https://res.cloudinary.com/bvw3okdf/video/upload/v1790598382/For_a_Little_While_Remastered.mp3.mp3' },
  { slug: 'unfaded', title: 'Unfaded', artist: 'Astra', mood: 'emotional', src: 'https://res.cloudinary.com/bvw3okdf/video/upload/v1790598382/Unfaded.mp3' },
];

function formatTime(s) {
  if (!s || isNaN(s)) return '0:00';
  const m = Math.floor(s / 60);
  const r = Math.floor(s % 60);
  return m + ':' + String(r).padStart(2, '0');
}

function AIMusic() {
  const audioRef = useRef(null);
  const [current, setCurrent] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('all');
  const [filterOpen, setFilterOpen] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onTime = () => setProgress(audio.currentTime);
    const onLoaded = () => setDuration(audio.duration || 0);
    const onEnd = () => { setPlaying(false); setProgress(0); };
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    audio.addEventListener('timeupdate', onTime);
    audio.addEventListener('loadedmetadata', onLoaded);
    audio.addEventListener('ended', onEnd);
    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);
    return () => {
      audio.removeEventListener('timeupdate', onTime);
      audio.removeEventListener('loadedmetadata', onLoaded);
      audio.removeEventListener('ended', onEnd);
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
    };
  }, []);

  useEffect(() => { if (audioRef.current) audioRef.current.volume = volume; }, [volume]);

  const togglePlay = (track) => {
    const audio = audioRef.current;
    if (!audio) return;
    if (current && current.slug === track.slug) {
      if (audio.paused) audio.play();
      else audio.pause();
    } else {
      setCurrent(track);
      audio.src = track.src;
      audio.play();
    }
  };

  const seek = (e) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX || e.touches[0].clientX) - rect.left;
    const pct = Math.max(0, Math.min(1, x / rect.width));
    audio.currentTime = pct * duration;
    setProgress(pct * duration);
  };

  const downloadTrack = (track) => {
    const ok = window.confirm('Download "' + track.title + '" by ' + track.artist + '?');
    if (!ok) return;
    const a = document.createElement('a');
    a.href = track.src;
    a.download = track.title + '.mp3';
    a.target = '_blank';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const filters = [
    { key: 'all', label: 'All' },
    { key: 'emotional', label: 'Emotional' },
    { key: 'collab', label: 'Collaborations' },
  ];

  const filtered = tracks.filter(t => {
    const q = query.toLowerCase().trim();
    const matchSearch = !q ||
      t.title.toLowerCase().includes(q) ||
      t.artist.toLowerCase().includes(q);
    const matchFilter = filter === 'all' || t.mood === filter;
    return matchSearch && matchFilter;
  });

  return (
    <div className="simple-page page">
      <div className="wrap">
        <header className="page-header reveal">
          <p className="eyebrow">AI Music</p>
          <h1>Composed with Intelligence</h1>
          <p>Tracks I've created using AI-assisted composition tools.</p>
        </header>

        <audio ref={audioRef} preload="none" />

        <div className="blog-toolbar">
          <div className="search-wrap">
            <input
              type="text"
              className="search-input"
              placeholder="Search tracks or artists..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            {query && (
              <button className="search-clear" onClick={() => setQuery('')} aria-label="Clear search">×</button>
            )}
          </div>

          <div className="filter-wrap">
            <button
              className={'filter-btn' + (filter !== 'all' ? ' active' : '')}
              onClick={() => setFilterOpen(v => !v)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
              </svg>
              <span>{filters.find(f => f.key === filter).label}</span>
            </button>
            {filterOpen && (
              <ul className="filter-menu">
                {filters.map(f => (
                  <li key={f.key}>
                    <button
                      className={'filter-option' + (filter === f.key ? ' active' : '')}
                      onClick={() => { setFilter(f.key); setFilterOpen(false); }}
                    >
                      {f.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="empty-note">No tracks match your search.</div>
        ) : (
          <div className="track-list">
            {filtered.map((t) => {
              const isCurrent = current && current.slug === t.slug;
              const isPlaying = isCurrent && playing;
              return (
                <div className={'track-card card' + (isCurrent ? ' active' : '')} key={t.slug}>
                  <div className="track-row">
                    <button
                      className={'track-play' + (isPlaying ? ' playing' : '')}
                      onClick={() => togglePlay(t)}
                      aria-label={isPlaying ? 'Pause' : 'Play'}
                    >
                      {isPlaying ? '❚❚' : '▶'}
                    </button>
                    <div className="track-meta">
                      <h3>{t.title}</h3>
                      <span className="track-artist">{t.artist}</span>
                    </div>
                    <div className="track-actions">
                      <Link to={'/ai-music/' + t.slug} className="track-action-btn" aria-label="Details">ℹ</Link>
                      <button className="track-action-btn" onClick={() => downloadTrack(t)} aria-label="Download">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                          <polyline points="7 10 12 15 17 10"/>
                          <line x1="12" y1="15" x2="12" y2="3"/>
                        </svg>
                      </button>
                    </div>
                  </div>

                  {isCurrent && (
                    <div className="track-progress-row">
                      <span className="track-time">{formatTime(progress)}</span>
                      <div className="track-progress" onClick={seek} onTouchStart={seek}>
                        <div className="track-progress-fill" style={{ width: (duration ? (progress / duration) * 100 : 0) + '%' }} />
                      </div>
                      <span className="track-time">{formatTime(duration)}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {current && (
          <div className="volume-row">
            <span className="volume-label">🔊</span>
            <input
              type="range" min="0" max="1" step="0.01"
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="volume-slider"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default AIMusic;
