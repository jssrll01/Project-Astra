import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SimplePage.css';

function BlogDownloadButton({ slug }) {
  return (
    <Link
      to={'/blog/' + slug + '?dl=1'}
      className="blog-download"
      aria-label="Download as PDF"
      title="Download as PDF"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="7 10 12 15 17 10"/>
        <line x1="12" y1="15" x2="12" y2="3"/>
      </svg>
    </Link>
  );
}

function Blog() {
  const [query, setQuery] = useState('');

  const posts = [
    { slug: 'first-web-app', title: 'How I Built My First Web App', date: 'September 2026',
      excerpt: 'Building my first web app was one of the experiences that made me more interested in technology and software development. At first, I only wanted to understand how websites and applications worked.' },
    { slug: 'ai-in-projects', title: 'How I Use AI in My Projects', date: 'September 2026',
      excerpt: 'Artificial intelligence has become an important part of the way I explore technology and develop my projects. I don\'t see AI as a replacement for learning or creativity.' },
    { slug: 'ai-assisted-programming', title: 'AI-Assisted Programming: Benefits and Limitations', date: 'October 2026',
      excerpt: 'Artificial intelligence is changing the way people learn and develop software. AI-assisted programming allows developers to use AI tools to generate code, explain concepts, and explore different approaches.' },
    { slug: 'prompt-engineering-beginners', title: 'Prompt Engineering for Beginners', date: 'October 2026',
      excerpt: 'As artificial intelligence becomes more common, knowing how to communicate effectively with AI systems has become an increasingly useful skill. One way to improve the results you get from AI is through prompt engineering.' },
    { slug: 'innovation-matters', title: 'Why I Believe Innovation Matters', date: 'November 2026',
      excerpt: 'Innovation has always been connected to progress. It is not simply about creating something completely new. Sometimes, innovation means finding a better way to solve an existing problem.' },
    { slug: 'human-computer-interaction', title: 'The Future of Human-Computer Interaction', date: 'November 2026',
      excerpt: 'Human-computer interaction, or HCI, is the way people communicate and interact with computers and digital systems. From keyboards to voice assistants, the way we interact with technology has evolved.' },
    { slug: 'responsible-ai', title: 'Responsible Use of Artificial Intelligence', date: 'December 2026',
      excerpt: 'Artificial intelligence is becoming a powerful part of modern technology. It can help people learn, create, solve problems, and explore ideas. However, having access to powerful technology means using it responsibly.' },
    { slug: 'personal-ai-assistants', title: 'The Future of Personal AI Assistants', date: 'December 2026',
      excerpt: 'Artificial intelligence assistants are already becoming part of everyday life. They can answer questions, help with research, generate content, write code, and assist with creative work.' },
  ];

  const filtered = posts.filter(p => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      p.title.toLowerCase().includes(q) ||
      p.excerpt.toLowerCase().includes(q) ||
      p.date.toLowerCase().includes(q)
    );
  });

  return (
    <div className="simple-page page">
      <div className="wrap">
        <header className="page-header reveal">
          <p className="eyebrow">Blog</p>
          <h1>Thoughts &amp; Writing</h1>
          <p>Notes on tech, learning, design, and my journey as a UI/UX Designer.</p>
        </header>

        <div className="blog-search-wrap">
          <input
            type="text"
            className="blog-search"
            placeholder="Search blogs..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {filtered.length === 0 ? (
          <div className="empty-note">No blogs match "{query}"</div>
        ) : (
          <div className="blog-grid">
            {filtered.map((p) => (
              <article className="blog-card card" key={p.slug}>
                <span className="blog-date">{p.date}</span>
                <h3>{p.title}</h3>
                <p>{p.excerpt}</p>
                <div className="blog-actions">
                  <Link to={'/blog/' + p.slug} className="blog-read">Read the full blog →</Link>
                  <BlogDownloadButton slug={p.slug} />
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Blog;
