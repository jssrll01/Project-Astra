import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './SimplePage.css';
import { trackDetails } from './aiMusicContent';

function AIMusicDetail() {
  const { slug } = useParams();
  const track = trackDetails.find(t => t.slug === slug);

  if (!track) {
    return (
      <div className="simple-page page">
        <div className="wrap not-found-wrap">
          <h1>Track not found</h1>
          <Link to="/ai-music" className="btn btn-primary">Back to AI Music</Link>
        </div>
      </div>
    );
  }

  const downloadTrack = () => {
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

  return (
    <div className="simple-page page">
      <div className="wrap">
        <Link to="/ai-music" className="post-back">← Back to AI Music</Link>
        <article className="blog-post card">
          <h1>{track.title}</h1>
          <span className="post-meta">{track.artist}</span>
          <div style={{ marginBottom: 24 }}>
            <button className="btn btn-primary" onClick={downloadTrack}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 8 }}>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download Track
            </button>
          </div>
          {track.content}
        </article>
      </div>
    </div>
  );
}

export default AIMusicDetail;
