import React from 'react';
import './Background.css';

function Background() {
  return (
    <div className="bg-layer" aria-hidden="true">
      <div className="bg-stars" />
      <div className="bg-glow bg-glow-1" />
      <div className="bg-glow bg-glow-2" />

      <div className="asteroid-belt">
        <span className="asteroid a1" />
        <span className="asteroid a2" />
        <span className="asteroid a3" />
        <span className="asteroid a4" />
        <span className="asteroid a5" />
        <span className="asteroid a6" />
        <span className="asteroid a7" />
        <span className="asteroid a8" />
      </div>

      <div className="far-satellite">
        <span className="fs-body" />
        <span className="fs-panel" />
      </div>

      <div className="supernova" />

      <span className="shooting-star ss1" />
      <span className="shooting-star ss2" />
      <span className="shooting-star ss3" />
    </div>
  );
}

export default Background;
