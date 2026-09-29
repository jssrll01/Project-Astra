import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SimplePage.css';
import { SkeletonList } from '../components/Skeleton';

function Blog() {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const t = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(t);
  }, []);
  const [filter, setFilter] = useState('all');
  const [filterOpen, setFilterOpen] = useState(false);

  const posts = [
    { slug: 'first-web-app', title: 'How I Built My First Web App', date: 'September 2026', tag: 'dev',
      excerpt: 'Building my first web app was one of the experiences that made me more interested in technology and software development. At first, I only wanted to understand how websites and applications worked.' },
    { slug: 'ai-in-projects', title: 'How I Use AI in My Projects', date: 'September 2026', tag: 'ai',
      excerpt: 'Artificial intelligence has become an important part of the way I explore technology and develop my projects. I don\'t see AI as a replacement for learning or creativity.' },
    { slug: 'ai-assisted-programming', title: 'AI-Assisted Programming: Benefits and Limitations', date: 'October 2026', tag: 'ai',
      excerpt: 'Artificial intelligence is changing the way people learn and develop software. AI-assisted programming allows developers to use AI tools to generate code, explain concepts, and explore different approaches.' },
    { slug: 'prompt-engineering-beginners', title: 'Prompt Engineering for Beginners', date: 'October 2026', tag: 'ai',
      excerpt: 'As artificial intelligence becomes more common, knowing how to communicate effectively with AI systems has become an increasingly useful skill.' },
    { slug: 'innovation-matters', title: 'Why I Believe Innovation Matters', date: 'November 2026', tag: 'thoughts',
      excerpt: 'Innovation has always been connected to progress. It is not simply about creating something completely new.' },
    { slug: 'human-computer-interaction', title: 'The Future of Human-Computer Interaction', date: 'November 2026', tag: 'design',
      excerpt: 'Human-computer interaction, or HCI, is the way people communicate and interact with computers and digital systems.' },
    { slug: 'responsible-ai', title: 'Responsible Use of Artificial Intelligence', date: 'December 2026', tag: 'ai',
      excerpt: 'Artificial intelligence is becoming a powerful part of modern technology. It can help people learn, create, solve problems, and explore ideas.' },
    { slug: 'personal-ai-assistants', title: 'The Future of Personal AI Assistants', date: 'December 2026', tag: 'ai',
      excerpt: 'Artificial intelligence assistants are already becoming part of everyday life. They can answer questions, help with research, and assist with creative work.' },
  ];

  const filters = [
    { key: 'all', label: 'All' },
    { key: 'ai', label: 'AI' },
    { key: 'dev', label: 'Development' },
    { key: 'design', label: 'Design' },
    { key: 'thoughts', label: 'Thoughts' },
  ];

  const filtered = posts.filter(p => {
    const q = query.toLowerCase().trim();
    const matchesSearch = !q ||
      p.title.toLowerCase().includes(q) ||
      p.excerpt.toLowerCase().includes(q) ||
      p.date.toLowerCase().includes(q);
    const matchesFilter = filter === 'all' || p.tag === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="simple-page page">
      <div className="wrap">
        <header className="page-header reveal">
          <p className="eyebrow">Blog</p>
          <h1>Thoughts &amp; Writing</h1>
          <p>Notes on tech, learning, design, and my journey as a UI/UX Designer.</p>
        </header>

        <div className="blog-toolbar">
          <div className="search-wrap">
            <input
              type="text"
              className="search-input"
              placeholder="Search blogs..."
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

        {loading ? (
          <SkeletonList count={3} />
        ) : filtered.length === 0 ? (
          <div className="empty-note">No blogs match your search.</div>
        ) : (
          <div className="blog-grid">
            {filtered.map((p) => (
              <article className="blog-card card" key={p.slug}>
                <span className="blog-date">{p.date}</span>
                <h3>{p.title}</h3>
                <p>{p.excerpt}</p>
                <Link to={'/blog/' + p.slug} className="blog-read">Read the full blog</Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Blog;
