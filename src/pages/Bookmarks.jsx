import React from 'react';
import './SimplePage.css';

function Bookmarks() {
  const groups = [
    {
      title: 'Development',
      items: [
        { name: 'MDN Web Docs', url: 'https://developer.mozilla.org', desc: 'The reference for HTML, CSS, and JS.' },
        { name: 'React Docs', url: 'https://react.dev', desc: 'Official React documentation.' },
        { name: 'Vite', url: 'https://vitejs.dev', desc: 'Fast build tool and dev server.' },
        { name: 'CSS-Tricks', url: 'https://css-tricks.com', desc: 'CSS guides and tutorials.' },
      ],
    },
    {
      title: 'AI',
      items: [
        { name: 'Claude', url: 'https://claude.ai', desc: 'AI assistant for thinking and writing.' },
        { name: 'ChatGPT', url: 'https://chat.openai.com', desc: 'General-purpose AI chat.' },
        { name: 'Google Gemini', url: 'https://gemini.google.com', desc: 'Multimodal AI assistant.' },
        { name: 'Perplexity', url: 'https://www.perplexity.ai', desc: 'AI-powered search.' },
      ],
    },
    {
      title: 'Design',
      items: [
        { name: 'Figma', url: 'https://www.figma.com', desc: 'Design and prototyping tool.' },
        { name: 'Dribbble', url: 'https://dribbble.com', desc: 'Design inspiration.' },
        { name: 'Behance', url: 'https://www.behance.net', desc: 'Creative portfolios.' },
      ],
    },
    {
      title: 'Learning',
      items: [
        { name: 'freeCodeCamp', url: 'https://www.freecodecamp.org', desc: 'Hands-on coding lessons.' },
        { name: 'The Odin Project', url: 'https://www.theodinproject.com', desc: 'Full-stack curriculum.' },
        { name: 'Roadmap.sh', url: 'https://roadmap.sh', desc: 'Developer learning roadmaps.' },
      ],
    },
    {
      title: 'Tools',
      items: [
        { name: 'Vercel', url: 'https://vercel.com', desc: 'Frontend cloud hosting.' },
        { name: 'Render', url: 'https://render.com', desc: 'Static site and app hosting.' },
        { name: 'Cloudinary', url: 'https://cloudinary.com', desc: 'Media hosting and optimization.' },
      ],
    },
  ];

  return (
    <div className="simple-page page">
      <div className="wrap">
        <header className="page-header reveal">
          <p className="eyebrow">Bookmarks</p>
          <h1>Links I Actually Use</h1>
          <p>Curated resources, tools, and sites I return to often.</p>
        </header>

        {groups.map((group) => (
          <section className="bookmark-group" key={group.title}>
            <h2 className="bookmark-title">{group.title}</h2>
            <div className="bookmark-list">
              {group.items.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bookmark card"
                >
                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default Bookmarks;
