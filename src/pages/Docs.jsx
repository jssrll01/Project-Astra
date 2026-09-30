import React from 'react';
import './SimplePage.css';

function Docs() {
  const sections = [
    {
      id: 'overview',
      title: 'Overview',
      body: (
        <>
          <p>
            Project Astra is a personal portfolio and technology ecosystem built to document
            my journey as a developer, UI/UX designer, and explorer of artificial intelligence.
            The name "Astra" means star — a reference to the astronomy-inspired visual theme
            and to the idea of something always reaching upward.
          </p>
          <p>
            This documentation explains the technologies, decisions, and structure behind the
            site so it can serve as a reference for anyone building something similar.
          </p>
        </>
      ),
    },
    {
      id: 'stack',
      title: 'Tech Stack',
      body: (
        <>
          <ul>
            <li><strong>React 18</strong> — component-based UI, the core of the whole app</li>
            <li><strong>Vite 5</strong> — ultra-fast build tool and dev server</li>
            <li><strong>React Router 6</strong> — client-side routing with animated page transitions</li>
            <li><strong>Plain CSS</strong> — no framework; every style hand-written for full control</li>
            <li><strong>Render</strong> — static site hosting with HTTPS and CDN</li>
            <li><strong>Cloudinary</strong> — media hosting for AI music tracks</li>
            <li><strong>jsPDF + html2canvas</strong> — client-side PDF generation for blogs</li>
          </ul>
        </>
      ),
    },
    {
      id: 'structure',
      title: 'Project Structure',
      body: (
        <>
          <p>The codebase is organized into clear folders:</p>
          <ul>
            <li><strong>src/components/</strong> — shared UI (Navbar, Footer, Background, ScrollProgress)</li>
            <li><strong>src/pages/</strong> — one file per page (Home, About, Skills, Blog, etc.)</li>
            <li><strong>src/hooks/</strong> — reusable logic (typewriter, scramble, counter, copy)</li>
            <li><strong>public/</strong> — static assets (icons, manifest, service worker, sitemap, robots.txt)</li>
          </ul>
          <p>
            Each page keeps its own CSS file next to the JSX so styles stay scoped and easy
            to find.
          </p>
        </>
      ),
    },
    {
      id: 'design',
      title: 'Design System',
      body: (
        <>
          <p>
            Astra uses a hand-crafted design system built on CSS custom properties in{' '}
            <code>src/index.css</code>.
          </p>
          <h3>Colors</h3>
          <ul>
            <li><strong>Background:</strong> #070b14 (deep navy-black)</li>
            <li><strong>Panel:</strong> #111a2e (card surfaces)</li>
            <li><strong>Teal:</strong> #2dd4bf — primary accent, links, glows</li>
            <li><strong>Coral:</strong> #fb923c — secondary accent, eyebrows</li>
            <li><strong>Gold:</strong> #fbbf24 — highlights, taglines</li>
            <li><strong>Purple:</strong> #a855f7 — gradients, backgrounds</li>
          </ul>
          <h3>Typography</h3>
          <ul>
            <li><strong>Fraunces</strong> — serif for headings (editorial, distinctive)</li>
            <li><strong>Inter</strong> — sans-serif for body text (clean, readable)</li>
          </ul>
          <h3>Principles</h3>
          <ul>
            <li>Dark by default — easier on the eyes for long reads</li>
            <li>Motion is subtle and never blocks content</li>
            <li>Glass panels, soft borders, glowing accents</li>
            <li>Mobile-first — every layout starts with small screens</li>
          </ul>
        </>
      ),
    },
    {
      id: 'features',
      title: 'Features',
      body: (
        <>
          <p>Astra is not just a portfolio — it is a small technology ecosystem:</p>
          <ul>
            <li><strong>Animated orbital hero</strong> — the JC avatar orbits inside three rings</li>
            <li><strong>Custom AI music player</strong> — plays in the background across pages</li>
            <li><strong>Blog with search + filters + PDF download</strong></li>
            <li><strong>Prompt Engineering Labs</strong> — three labs with copy buttons</li>
            <li><strong>Bookshelf</strong> — books and takeaways</li>
            <li><strong>Threads</strong> — short dated updates</li>
            <li><strong>Settings</strong> — real preferences (theme, motion, quality)</li>
            <li><strong>PWA</strong> — installable on mobile, offline-capable</li>
            <li><strong>Custom 404</strong> — gradient 404 with twinkle stars</li>
            <li><strong>Custom splash screen</strong> — animated logo on first load</li>
          </ul>
        </>
      ),
    },
    {
      id: 'performance',
      title: 'Performance Decisions',
      body: (
        <>
          <p>Several early designs were removed because they hurt performance:</p>
          <ul>
            <li>Full-screen canvas starfield — replaced with CSS gradients</li>
            <li>backdrop-filter blur on scrolling content — removed for smooth scrolling</li>
            <li>Animated mesh gradient — replaced with static radial gradients</li>
            <li>Framer Motion — replaced with lightweight CSS transitions</li>
            <li>Global animation overrides — scoped so the orbit always spins normally</li>
          </ul>
          <p>
            The result is a site that runs smoothly even on mid-range Android phones.
          </p>
        </>
      ),
    },
    {
      id: 'deployment',
      title: 'Deployment',
      body: (
        <>
          <p>Deploying Astra takes three steps:</p>
          <ol>
            <li>Push the repo to GitHub</li>
            <li>Import it into Render as a <strong>Static Site</strong></li>
            <li>Set <strong>Build Command:</strong> <code>npm install && npm run build</code> and <strong>Publish Directory:</strong> <code>dist</code></li>
          </ol>
          <p>
            Add a rewrite rule <code>/* → /index.html</code> so direct URL access works with
            React Router. Without this, refreshing on any route other than <code>/</code>{' '}
            returns a 404.
          </p>
        </>
      ),
    },
    {
      id: 'roadmap',
      title: 'Roadmap',
      body: (
        <>
          <p>Planned additions to the ecosystem:</p>
          <ul>
            <li>Projects page with real case studies</li>
            <li>Now page — live current focus</li>
            <li>Uses page — hardware and software setup</li>
            <li>Lab / Playground — interactive experiments</li>
            <li>Guestbook with moderation</li>
            <li>Site-wide search across all content</li>
            <li>Command palette for fast navigation</li>
            <li>Custom domain and email</li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <div className="simple-page page">
      <div className="wrap">
        <header className="page-header reveal">
          <p className="eyebrow">Documentation</p>
        </header>

        <div className="docs-toc card">
          <h4>Contents</h4>
          <ul>
            {sections.map((s, i) => (
              <li key={s.id}>
                <a href={'#' + s.id}>{i + 1}. {s.title}</a>
              </li>
            ))}
          </ul>
        </div>

        {sections.map((s) => (
          <section className="docs-section card" id={s.id} key={s.id}>
            <h2>{s.title}</h2>
            {s.body}
          </section>
        ))}
      </div>
    </div>
  );
}

export default Docs;
