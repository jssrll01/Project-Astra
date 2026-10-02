import React from 'react';
import './SimplePage.css';

function Docs() {
  const toc = [
    'Introduction',
    'Project Vision and Objectives',
    'Technology Stack',
    'System Architecture',
    'Project Structure',
    'Design System',
    'Navigation and Information Architecture',
    'Major Features',
    'How the Project Was Built',
    'Core Technical Implementations',
    'Performance Engineering',
    'Image and Media Optimization',
    'Progressive Web App Architecture',
    'Personal Vault Security Model',
    'PDF Generation',
    'Deployment Architecture',
    'Accessibility and UX',
    'SEO and Discoverability',
    'Testing and Quality Assurance',
    'Technical Trade-offs',
    'Known Limitations',
    'Future Roadmap',
    'Recommended Improvements',
    'Conclusion',
    'Research References',
  ];

  return (
    <div className="simple-page page docs-page">
      <div className="wrap">
        <header className="page-header reveal">
          <p className="eyebrow">Documentation</p>
          <h1>Project Astra — Full Technical Documentation &amp; Research</h1>
        </header>

        <section className="docs-section card">
          <ul className="docs-meta">
            <li><strong>Project:</strong> Astra</li>
            <li><strong>Author:</strong> Jessrell M. Custodio</li>
            <li><strong>Type:</strong> Personal Portfolio / Technology Ecosystem / Interactive Web Laboratory</li>
            <li><strong>Primary Platform:</strong> Web / PWA</li>
            <li><strong>Architecture:</strong> React single-page application</li>
            <li><strong>Deployment:</strong> Render Static Site</li>
            <li><strong>Media Infrastructure:</strong> Cloudinary</li>
            <li><strong>Security/Notification Layer:</strong> Telegram Bot API</li>
          </ul>
        </section>

        <section className="docs-section card">
          <h2>Table of Contents</h2>
          <ul>
            {toc.map((t, i) => (
              <li key={t}>{i + 1}. {t}</li>
            ))}
          </ul>
        </section>

        <section className="docs-section card">
          <h2>1. Introduction</h2>
          <p>Project Astra is a personal portfolio and technology ecosystem created by Jessrell M. Custodio.</p>
          <p>Unlike a conventional developer portfolio that primarily displays a résumé, skills list, and selected projects, Astra is designed as a living digital laboratory.</p>
          <p>The project combines:</p>
          <ul>
            <li>personal identity</li>
            <li>software development</li>
            <li>UI/UX design</li>
            <li>research</li>
            <li>documentation</li>
            <li>creative experimentation</li>
            <li>AI-assisted work</li>
            <li>music</li>
            <li>photography</li>
            <li>programming experiments</li>
            <li>educational resources</li>
            <li>personal archives</li>
            <li>interactive applications</li>
            <li>progressive web technology</li>
          </ul>
          <p>The result is an ecosystem rather than a single portfolio page.</p>

          <h3>1.1 Meaning of the Name</h3>
          <p>The name Astra means &ldquo;stars&rdquo; and provides the conceptual foundation for the visual language of the project.</p>
          <p>The astronomy-inspired identity appears through:</p>
          <ul>
            <li>orbital rings</li>
            <li>star fields</li>
            <li>glowing elements</li>
            <li>celestial gradients</li>
            <li>satellites/orbital imagery</li>
            <li>subtle space-like motion</li>
            <li>constellation-inspired visual relationships</li>
          </ul>
          <p>The visual concept also represents the project&rsquo;s underlying philosophy:</p>
          <p><em>Always explore. Always learn. Always reach upward.</em></p>
          <p>Astra therefore functions simultaneously as: a portfolio, a personal knowledge base, an experimental laboratory, a digital archive, a creative showcase, and a demonstration of technical ability.</p>
        </section>

        <section className="docs-section card">
          <h2>2. Project Vision and Objectives</h2>
          <h3>2.1 Primary Vision</h3>
          <p>The primary goal of Astra is to create a digital environment that demonstrates what the creator can build, rather than simply describing what the creator knows.</p>
          <p>Instead of: &ldquo;I know React.&rdquo; &mdash; Astra attempts to demonstrate React through an actual ecosystem containing multiple interactive experiences.</p>
          <p>Instead of: &ldquo;I understand UI/UX.&rdquo; &mdash; Astra demonstrates this through custom layouts, navigation systems, animations, responsive interfaces, loading states, visual hierarchy, accessibility controls, and interactive components.</p>
          <p>Instead of: &ldquo;I am interested in technology.&rdquo; &mdash; Astra provides actual technology experiments.</p>

          <h3>2.2 Core Objectives</h3>
          <p><strong>Objective 1 &mdash; Personal Branding.</strong> Create a distinctive digital identity based around the Astra visual system.</p>
          <p><strong>Objective 2 &mdash; Technical Demonstration.</strong> Demonstrate practical experience with React, JavaScript, CSS, routing, media delivery, PWA architecture, client-side APIs, browser APIs, and performance optimization.</p>
          <p><strong>Objective 3 &mdash; Creative Showcase.</strong> Provide dedicated spaces for AI music, photography, games, visual collections, prompts, writing, and design experiments.</p>
          <p><strong>Objective 4 &mdash; Knowledge Management.</strong> Create a centralized environment for bookmarks, books, learning resources, documentation, curriculum tracking, archives, and technical notes.</p>
          <p><strong>Objective 5 &mdash; Continuous Experimentation.</strong> Astra is intentionally designed to evolve. New experiments can become new pages or modules without requiring the entire project to be redesigned.</p>
        </section>

        <section className="docs-section card">
          <h2>3. Technology Stack</h2>
          <ul>
            <li><strong>React 18</strong> &mdash; UI framework</li>
            <li><strong>Vite 5</strong> &mdash; Development server and build tooling</li>
            <li><strong>React Router 6</strong> &mdash; Client-side routing</li>
            <li><strong>JavaScript</strong> &mdash; Application logic</li>
            <li><strong>HTML</strong> &mdash; Document structure</li>
            <li><strong>Plain CSS</strong> &mdash; Design system and styling</li>
            <li><strong>Cloudinary</strong> &mdash; Image/media hosting and optimization</li>
            <li><strong>html2canvas</strong> &mdash; DOM-to-canvas rendering</li>
            <li><strong>jsPDF</strong> &mdash; Browser-based PDF generation</li>
            <li><strong>Telegram Bot API</strong> &mdash; Vault authentication-code delivery</li>
            <li><strong>Service Worker</strong> &mdash; Offline/PWA functionality</li>
            <li><strong>Web App Manifest</strong> &mdash; Installable PWA metadata</li>
            <li><strong>Render</strong> &mdash; Static deployment</li>
            <li><strong>GitHub</strong> &mdash; Source-code repository</li>
            <li><strong>Browser APIs</strong> &mdash; Clipboard, storage, media, etc.</li>
          </ul>
        </section>

        <section className="docs-section card">
          <h2>4. System Architecture</h2>
          <p>Astra follows a modular frontend architecture:</p>
          <p><code>UI → Pages → Shared Components → Hooks / Utilities → Browser / External Services</code></p>
          <p>This keeps presentation logic separate from reusable behavior.</p>
        </section>

        <section className="docs-section card">
          <h2>5. Project Structure</h2>
          <ul>
            <li><strong>public/</strong> &mdash; icons, manifest, service worker, sitemap.xml, robots.txt, static assets</li>
            <li><strong>src/components/</strong> &mdash; Navbar, Footer, Background, Splash, ScrollProgress, Img, Skeleton</li>
            <li><strong>src/pages/</strong> &mdash; Home, About, Skills, Projects, Gallery, Collection, Blog, Threads, Contact, Partners, Bookshelf, Bookmarks, Archives, Journey, Prompt Labs, Code Playground, Certifications, Achievements, Game Space, Devotion, Personal Vault, Settings, FAQ, Documentation, NotFound</li>
            <li><strong>src/hooks/</strong> &mdash; typewriter, scramble, counter, copy</li>
            <li><strong>src/utils/</strong> &mdash; helpers and preloading</li>
            <li><strong>src/index.css</strong>, <strong>src/main.jsx</strong>, <strong>src/App.jsx</strong></li>
            <li><strong>package.json</strong>, <strong>vite.config.js</strong>, <strong>README.md</strong></li>
          </ul>
        </section>

        <section className="docs-section card">
          <h2>6. Design System</h2>
          <p>Astra uses a custom design system based primarily on CSS custom properties, defined in <code>src/index.css</code>.</p>
          <ul>
            <li><strong>Background:</strong> #070b14</li>
            <li><strong>Panel:</strong> #111a2e</li>
            <li><strong>Teal:</strong> #2dd4bf &mdash; primary accent</li>
            <li><strong>Coral:</strong> #fb923c &mdash; secondary accent</li>
            <li><strong>Gold:</strong> #fbbf24 &mdash; highlights</li>
            <li><strong>Purple:</strong> #a855f7 &mdash; atmospheric gradients</li>
          </ul>
          <p><strong>Typography:</strong> Fraunces for editorial headings, Inter for body and controls.</p>
          <p><strong>Principles:</strong> dark by default, subtle motion, glass panels, mobile first.</p>
        </section>

        <section className="docs-section card">
          <h2>7. Navigation and Information Architecture</h2>
          <p><strong>Identity:</strong> Home, About, Journey, Contact</p>
          <p><strong>Professional:</strong> Skills, Projects, Certifications, Achievements, Partners</p>
          <p><strong>Creative:</strong> AI Music, Gallery, Collection, Game Space, Devotion</p>
          <p><strong>Knowledge:</strong> Blog, Bookshelf, Bookmarks, Documentation, Archives</p>
          <p><strong>Development:</strong> Code Playground, Prompt Lab &mdash; Music / Image / Programming</p>
          <p><strong>Personal:</strong> Threads, Personal Vault, Settings, FAQ</p>
        </section>

        <section className="docs-section card">
          <h2>8. Major Features</h2>
          <ul>
            <li><strong>Animated Orbital Hero</strong> &mdash; the JC avatar orbits inside three rings</li>
            <li><strong>Animated Splash Screen</strong> &mdash; star field, meteor effects, progress, status messages</li>
            <li><strong>Site-Wide Starfield</strong> &mdash; layered CSS star effects</li>
            <li><strong>AI Music Player</strong> &mdash; track browsing, search, filtering, details, downloads</li>
            <li><strong>Blog</strong> &mdash; article pages, search, filtering, PDF generation</li>
            <li><strong>Prompt Engineering Labs</strong> &mdash; Music, Image, Programming</li>
            <li><strong>Collection and Gallery</strong> &mdash; grid, categories, lightbox, optimized media</li>
            <li><strong>Game Space</strong> &mdash; screenshots, game information, collections</li>
            <li><strong>Devotion</strong> &mdash; prayers, reflections, religious texts, imagery</li>
            <li><strong>Personal Vault</strong> &mdash; authentication-code, Telegram delivery, lockout</li>
            <li><strong>Code Playground</strong> &mdash; in-browser HTML/CSS/JavaScript with live preview</li>
            <li><strong>Bookmarks</strong> &mdash; organized learning resources</li>
            <li><strong>Threads</strong> &mdash; short-form chronological updates</li>
            <li><strong>Settings</strong> &mdash; accessibility, performance, quality, maintenance</li>
            <li><strong>PWA</strong> &mdash; manifest, service worker, installability, offline support</li>
            <li><strong>Custom 404</strong> &mdash; gradient 404 with stars and navigation</li>
          </ul>
        </section>

        <section className="docs-section card">
          <h2>9. How the Project Was Built</h2>
          <p>Astra was reportedly built almost entirely from the terminal. Files were generated and modified through shell commands such as <code>cat &gt; file &lt;&lt; 'ENDOFFILE'</code> and edited using tools such as <code>sed</code> and <code>awk</code>.</p>
          <p><strong>Benefits:</strong> reproducibility, automation, scriptability, consistency, environment independence.</p>
          <p><strong>Development sequence:</strong></p>
          <ol>
            <li>Scaffold &mdash; Vite + React + React Router</li>
            <li>Design System &mdash; colors, typography, spacing, surfaces, effects, responsive rules</li>
            <li>Shared Components &mdash; Navbar, Footer, Background, Splash, Scroll progress, Image system, Skeletons</li>
            <li>Core Portfolio &mdash; Home, About, Skills, Projects, Contact</li>
            <li>Knowledge System &mdash; Blog, Documentation, FAQ, Bookshelf, Bookmarks</li>
            <li>Creative System &mdash; AI Music, Collection, Gallery, Prompt Labs</li>
            <li>Interactive System &mdash; Code Playground, Game Space, Devotion, Personal Vault</li>
            <li>PWA &mdash; manifest, service worker, offline support</li>
            <li>Deployment &mdash; GitHub, Render, SPA rewrite, production build</li>
          </ol>
        </section>

        <section className="docs-section card">
          <h2>10. Core Technical Implementations</h2>
          <ul>
            <li><strong>React Portals</strong> &mdash; modals and lightboxes mount near <code>document.body</code></li>
            <li><strong>Image Skeleton Loading</strong> &mdash; skeleton &rarr; image &rarr; fade &rarr; skeleton removed</li>
            <li><strong>Cloudinary Transformations</strong> &mdash; resize + auto format + auto quality + CDN</li>
            <li><strong>Telegram-Based Authentication</strong> &mdash; 6-digit code delivered via Telegram Bot API</li>
            <li><strong>Security Note</strong> &mdash; a client-side React application should not expose the Telegram bot token; a secure backend endpoint is the recommended architecture</li>
          </ul>
        </section>

        <section className="docs-section card">
          <h2>11. Performance Engineering</h2>
          <ul>
            <li>Removed full-screen canvas starfield &mdash; replaced with CSS layers</li>
            <li>Removed heavy backdrop-filter from scrolling content</li>
            <li>Replaced animated mesh gradient with static radial gradients</li>
            <li>Replaced Framer Motion with lightweight CSS transitions</li>
            <li>Scoped animation overrides so orbital motion stays independent</li>
            <li>Lazy loading for off-screen images with explicit dimensions</li>
            <li>Performance target: LCP &le; 2.5s at the 75th percentile</li>
          </ul>
        </section>

        <section className="docs-section card">
          <h2>12. Image and Media Optimization</h2>
          <p><code>Original &rarr; Cloudinary &rarr; Resize &rarr; q_auto &rarr; f_auto &rarr; CDN &rarr; Browser</code></p>
          <p>Recommended: avoid oversized images, generate responsive candidates (320w, 480w, 768w, 1024w, 1440w) and let the browser choose.</p>
        </section>

        <section className="docs-section card">
          <h2>13. Progressive Web App Architecture</h2>
          <p>Manifest + Service Worker + HTTPS + Cache Strategy.</p>
          <p>The manifest defines name, short name, icons, theme color, background color, display mode, and start URL. The service worker intercepts requests and serves cached resources when appropriate.</p>
        </section>

        <section className="docs-section card">
          <h2>14. Personal Vault Security Model</h2>
          <p>Flow: <code>User &rarr; Open Vault &rarr; Request code &rarr; Generate OTP &rarr; Telegram delivery &rarr; Enter code &rarr; Verify &rarr; Unlock or Lockout</code></p>
          <p>Uses a six-digit authentication code with escalating lockout (15s &rarr; 30s &rarr; 1m &rarr; ... &rarr; 24h).</p>
          <p><strong>Recommended upgrade:</strong> move authentication to a server-side API with protected storage. The frontend should never be considered a secure place to store secrets.</p>
        </section>

        <section className="docs-section card">
          <h2>15. PDF Generation</h2>
          <p><code>HTML &rarr; html2canvas &rarr; Canvas &rarr; jsPDF &rarr; PDF</code></p>
          <p><strong>Advantages:</strong> no PDF server, no backend rendering, immediate generation, works directly from the browser.</p>
          <p><strong>Limitations:</strong> unsupported CSS, cross-origin images, large documents, memory consumption, font differences, complex layouts.</p>
        </section>

        <section className="docs-section card">
          <h2>16. Deployment Architecture</h2>
          <p><code>Developer &rarr; Git &rarr; GitHub &rarr; Render &rarr; Vite Production Build &rarr; dist/ &rarr; Static CDN &rarr; Visitor</code></p>
          <p><strong>Build:</strong> <code>npm install &amp;&amp; npm run build</code> &mdash; <strong>Publish:</strong> <code>dist</code></p>
          <p><strong>SPA rewrite:</strong> Source <code>/*</code> &rarr; Destination <code>/index.html</code> &rarr; Action <em>Rewrite</em>.</p>
        </section>

        <section className="docs-section card">
          <h2>17. Accessibility and UX</h2>
          <ul>
            <li>Keyboard navigation (Tab, Shift+Tab, Enter, Space, Escape, Arrows)</li>
            <li>Visible focus states</li>
            <li>Respect <code>prefers-reduced-motion</code></li>
            <li>Meaningful alt text; <code>alt=""</code> for decorative images</li>
            <li>Color contrast on the dark background</li>
          </ul>
        </section>

        <section className="docs-section card">
          <h2>18. SEO and Discoverability</h2>
          <ul>
            <li>Meaningful page titles per route</li>
            <li>Meta descriptions</li>
            <li>Open Graph metadata</li>
            <li>Canonical URLs once custom domain is live</li>
          </ul>
        </section>

        <section className="docs-section card">
          <h2>19. Testing and Quality Assurance</h2>
          <p><strong>Functional:</strong> navigation, buttons, filters, search, copy, audio, downloads, modals, PDF, authentication, lockout, settings.</p>
          <p><strong>Responsive:</strong> 320 / 360 / 375 / 390 / 414 / 768 / 1024 / 1280 / 1440+</p>
          <p><strong>Devices:</strong> low-end Android, mid-range Android, modern Android, iPhone/iPad, desktop Chrome/Firefox/Safari/Edge.</p>
          <p><strong>Tools:</strong> Lighthouse, DevTools Performance, DevTools Network, PageSpeed Insights, WebPageTest.</p>
        </section>

        <section className="docs-section card">
          <h2>20. Technical Trade-offs</h2>
          <ul>
            <li><strong>Plain CSS vs framework:</strong> max control, more manual maintenance</li>
            <li><strong>CSS animation vs library:</strong> smaller footprint, more custom code</li>
            <li><strong>Client-side PDF vs server:</strong> no backend, browser-dependent</li>
            <li><strong>Cloudinary vs local:</strong> dynamic transformation + CDN, external dependency</li>
            <li><strong>Static hosting vs backend:</strong> simple deployment, advanced private data needs a backend</li>
          </ul>
        </section>

        <section className="docs-section card">
          <h2>21. Known Limitations</h2>
          <ul>
            <li>Client-side security: secrets cannot be safely embedded in a frontend bundle</li>
            <li>Large media collections still affect bandwidth, memory, scrolling</li>
            <li>PWA cache invalidation requires a versioned cache strategy</li>
            <li>Client-side PDF rendering may be memory-heavy for long articles</li>
            <li>Highly animated interfaces may still cost GPU on low-end devices</li>
          </ul>
        </section>

        <section className="docs-section card">
          <h2>22. Future Roadmap</h2>
          <ul>
            <li>Light / Dark / System theme</li>
            <li>Site-wide search</li>
            <li>Command palette (Ctrl / Cmd + K)</li>
            <li>Custom domain and email</li>
            <li>Expanded Vault with server-side auth and encrypted storage</li>
            <li>Expanded Devotion and Game Space</li>
          </ul>
        </section>

        <section className="docs-section card">
          <h2>23. Recommended Improvements</h2>
          <ol>
            <li>Protect secrets &mdash; move Telegram API calls to a backend or serverless endpoint</li>
            <li>Add <code>prefers-reduced-motion</code> support</li>
            <li>Add route-level code splitting</li>
            <li>Optimize LCP for first screen</li>
            <li>Build a content data layer for structured content</li>
          </ol>
        </section>

        <section className="docs-section card">
          <h2>24. Conclusion</h2>
          <p>Project Astra is best understood not as a traditional portfolio, but as a personal technology ecosystem.</p>
          <p>Its architecture combines portfolio, documentation, knowledge base, creative studio, interactive laboratory, PWA, and personal archive.</p>
          <p>Astra&rsquo;s value is not simply the technologies it uses &mdash; it is a continuously evolving demonstration of what can be built, learned, documented, and experimented with inside one personal digital environment.</p>
        </section>

        <section className="docs-section card">
          <h2>25. Research References</h2>
          <ul>
            <li>React &mdash; official documentation and version information</li>
            <li>Vite &mdash; dev server, build system, project setup</li>
            <li>React Router &mdash; routing concepts</li>
            <li>Render &mdash; SPA rewrite configuration</li>
            <li>Cloudinary &mdash; automatic quality, format, responsive delivery, dynamic resizing</li>
            <li>MDN &mdash; manifests, service workers, lazy loading, performance</li>
            <li>html2canvas &mdash; browser-side DOM to canvas</li>
            <li>jsPDF &mdash; client-side JavaScript PDF generation</li>
            <li>Telegram &mdash; Bot API reference and messaging workflow</li>
            <li>web.dev &mdash; LCP, performance principles</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Docs;
