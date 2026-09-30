import React from 'react';
import './SimplePage.css';

function Docs() {
  const sections = [
    {
      id: 'intro',
      title: '1. Introduction',
      body: (
        <>
          <p>
            <strong>Project Astra</strong> is a personal portfolio and technology ecosystem
            built by Jessrell M. Custodio. It is designed to document my journey as a developer,
            UI/UX designer, and researcher — while serving as a live demonstration of the
            technologies and ideas I explore.
          </p>
          <p>
            The name <em>Astra</em> means "star" — a reference to the astronomy-inspired visual
            theme (orbits, star fields, satellites) and to the idea of always reaching upward.
            The site is more than a portfolio: it is a living lab.
          </p>
        </>
      ),
    },
    {
      id: 'stack',
      title: '2. Tech Stack',
      body: (
        <>
          <ul>
            <li><strong>React 18</strong> — component-based UI, the core of the app</li>
            <li><strong>Vite 5</strong> — ultra-fast build tool and dev server</li>
            <li><strong>React Router 6</strong> — client-side routing with animated page transitions</li>
            <li><strong>Plain CSS</strong> — no framework; every style hand-written for full control</li>
            <li><strong>html2canvas + jsPDF</strong> — client-side PDF generation for blog posts</li>
            <li><strong>Render</strong> — static site hosting with HTTPS and CDN</li>
            <li><strong>Cloudinary</strong> — media hosting and on-the-fly image optimization</li>
            <li><strong>Telegram Bot API</strong> — 2FA delivery for the Personal Vault</li>
          </ul>
        </>
      ),
    },
    {
      id: 'structure',
      title: '3. Project Structure',
      body: (
        <>
          <p>The codebase is organized into clear folders:</p>
          <ul>
            <li><strong>src/components/</strong> — shared UI (Navbar, Footer, Background, Splash, ScrollProgress, Img, Skeleton)</li>
            <li><strong>src/pages/</strong> — one file per page (Home, About, Skills, Projects, Gallery, Collection, Blog, Threads, Contact, Partners, Bookshelf, Bookmarks, Library, Archives, Journey, Prompt Labs, CodePlayground, Certifications, Achievements, GameSpace, Devotion, PersonalVault, Settings, FAQ, Docs, NotFound)</li>
            <li><strong>src/hooks/</strong> — reusable logic (typewriter, scramble, counter, copy)</li>
            <li><strong>src/utils/</strong> — helpers and preloading logic</li>
            <li><strong>public/</strong> — static assets (icons, manifest, service worker, sitemap, robots.txt)</li>
          </ul>
          <p>
            Each page keeps its own CSS file next to the JSX so styles stay scoped and easy to
            find. Shared page styles live in <code>SimplePage.css</code>.
          </p>
        </>
      ),
    },
    {
      id: 'design',
      title: '4. Design System',
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
      title: '5. Features',
      body: (
        <>
          <p>Astra is not just a portfolio — it is a small technology ecosystem:</p>
          <ul>
            <li><strong>Animated orbital hero</strong> — the JC avatar orbits inside three rings</li>
            <li><strong>Animated splash screen</strong> — star field, meteors, progress bar, status messages</li>
            <li><strong>Site-wide starfield</strong> — layered parallax stars on every page</li>
            <li><strong>Custom AI music player</strong> — plays tracks with search, filter, download, and detail pages</li>
            <li><strong>Blog with search, filters, and PDF download</strong></li>
            <li><strong>Prompt Engineering Labs</strong> — three labs (music, image, programming) with copy buttons</li>
            <li><strong>Collection / Gallery / Certifications / Achievements</strong> — photo grids with lightbox</li>
            <li><strong>Game Space</strong> — gaming screenshot showcase</li>
            <li><strong>Devotion</strong> — prayers, reflections, and holy imagery</li>
            <li><strong>Personal Vault</strong> — 2FA-gated private gallery with Telegram delivery and escalating lockout</li>
            <li><strong>Code Playground</strong> — in-browser HTML/CSS/JS editor with live preview</li>
            <li><strong>Bookmarks</strong> — curated learning resources across 13 categories</li>
            <li><strong>Library</strong> — BSIT curriculum tracker</li>
            <li><strong>Threads</strong> — short dated updates</li>
            <li><strong>Settings</strong> — accessibility, performance, quality, and maintenance toggles</li>
            <li><strong>PWA</strong> — installable on mobile, offline-capable</li>
            <li><strong>Custom 404</strong> — gradient 404 with twinkle stars</li>
          </ul>
        </>
      ),
    },
    {
      id: 'how',
      title: '6. How It Was Built',
      body: (
        <>
          <p>
            Astra was built entirely from the terminal. Every file was created with{' '}
            <code>cat &gt; file &lt;&lt; 'ENDOFFILE'</code> heredocs and edited with{' '}
            <code>sed</code> and <code>awk</code>. No GUI editors were used. This made the
            process reproducible and scriptable.
          </p>
          <h3>The build sequence</h3>
          <ol>
            <li><strong>Scaffold</strong> — Vite + React + React Router</li>
            <li><strong>Design system</strong> — colors, typography, spacing tokens in <code>index.css</code></li>
            <li><strong>Shared components</strong> — Navbar, Footer, Background, Splash, ScrollProgress</li>
            <li><strong>Core pages</strong> — Home, About, Skills, Projects, Contact</li>
            <li><strong>Content pages</strong> — Blog, Docs, FAQ, Library, Bookshelf, Bookmarks</li>
            <li><strong>Creative pages</strong> — AI Music, Collection, Gallery, Prompt Labs</li>
            <li><strong>Interactive pages</strong> — Code Playground, Game Space, Devotion, Personal Vault</li>
            <li><strong>PWA layer</strong> — service worker, manifest, offline page</li>
            <li><strong>Deployment</strong> — Render static site with SPA rewrite</li>
          </ol>
          <h3>Tooling decisions</h3>
          <ul>
            <li><strong>No CSS framework</strong> — hand-written styles gave full control over the astronomy aesthetic</li>
            <li><strong>React Portal for modals</strong> — lightboxes render at <code>document.body</code> so nothing can overlap them</li>
            <li><strong>Cloudinary transformations</strong> — <code>f_auto,q_auto,w_N</code> serves WebP/AVIF at the right size</li>
            <li><strong>Image skeleton loading</strong> — every image fades in from a shimmer placeholder</li>
            <li><strong>Telegram bot 2FA</strong> — the Vault sends a 6-digit code to Telegram on each unlock</li>
            <li><strong>Escalating lockout</strong> — 15s → 30s → 1m → … → 24h on repeated 2FA failures</li>
          </ul>
        </>
      ),
    },
    {
      id: 'performance',
      title: '7. Performance Decisions',
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
      title: '8. Deployment',
      body: (
        <>
          <p>Deploying Astra takes three steps:</p>
          <ol>
            <li>Push the repo to GitHub</li>
            <li>Import it into Render as a <strong>Static Site</strong></li>
            <li>Set <strong>Build Command:</strong> <code>npm install &amp;&amp; npm run build</code> and <strong>Publish Directory:</strong> <code>dist</code></li>
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
      title: '9. Roadmap',
      body: (
        <>
          <p>Planned additions to the ecosystem:</p>
          <ul>
            <li>Light / dark theme toggle</li>
            <li>Site-wide search</li>
            <li>Command palette for fast navigation</li>
            <li>Custom domain and email</li>
            <li>More Vault content</li>
            <li>More Devotion and Game Space entries</li>
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
          <h1>How Astra Was Built</h1>
        </header>

        <div className="docs-toc card">
          <h4>Contents</h4>
          <ul>
            {sections.map((s) => (
              <li key={s.id}>
                <a href={'#' + s.id}>{s.title}</a>
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
