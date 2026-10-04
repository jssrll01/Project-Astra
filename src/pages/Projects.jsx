import React from 'react';
import './Projects.css';

const projects = [
  { name: 'PROJECT ASTRA', category: 'Portfolio, Web App, UI/UX Design', type: 'Web App', status: 'Beta', version: 'v2.1.0', started: '08/20/2026', deployed: '10/10/2026', updated: '10/11/2026', host: 'Render' },
  { name: 'XMARKET', category: 'E-commerce, Digital Market, Marketplace', type: 'Web App', status: 'Active', version: 'v2.5.0', started: '08/20/2026', deployed: '09/25/2026', updated: '09/29/2026', host: 'Render' },
  { name: 'XONLINE WALLET', category: 'Finance, Digital Wallet', type: 'Web App', status: 'Active', version: 'v1.7.1', started: '09/01/2026', deployed: '09/17/2026', updated: '09/20/2026', host: 'Render' },
  { name: 'NOVAOKE', category: 'Casual, Entertainment, Tradition, Digital', type: 'Website / Web App', status: 'Archive', version: 'Unknown', started: 'N/A', deployed: 'N/A', updated: 'N/A', host: 'Vercel' },
  { name: 'PRICEE', category: 'E-commerce, Business', type: 'Website / Web App', status: 'Active', version: 'v1.5.0', started: '09/01/2026', deployed: '09/10/2026', updated: '09/15/2026', host: 'Render' },
  { name: 'XENTREPRENEUR', category: 'Business, Course', type: 'Website / Web App', status: 'Active', version: 'v2.5.0', started: 'N/A', deployed: 'N/A', updated: '09/18/2026', host: 'Render' },
  { name: 'ReceiptX', category: 'Business, Tools', type: 'Website / Web App', status: 'Active', version: 'v1.9.3', started: 'N/A', deployed: 'N/A', updated: '09/20/2026', host: 'Render' },
];

function statusClass(s) {
  const lower = s.toLowerCase();
  if (lower === 'active') return 'active';
  if (lower === 'beta') return 'ongoing';
  return 'planned';
}

function Projects() {
  return (
    <div className="simple-page page projects-page">
      <div className="wrap">
        <header className="page-header reveal">
          <p className="eyebrow">Projects</p>
        </header>
        <div className="projects-grid">
          {projects.map((p) => (
            <article className="project-card" key={p.name}>
              <div className="project-header">
                <h3>{p.name}</h3>
                <span className={'project-status ' + statusClass(p.status)}>{p.status}</span>
              </div>
              <p className="project-category">{p.category}</p>
              <div className="project-meta">
                <div className="project-meta-row"><span>Type</span><span>{p.type}</span></div>
                <div className="project-meta-row"><span>Version</span><span>{p.version}</span></div>
                <div className="project-meta-row"><span>Started</span><span>{p.started}</span></div>
                <div className="project-meta-row"><span>Deployed</span><span>{p.deployed}</span></div>
                <div className="project-meta-row"><span>Updated</span><span>{p.updated}</span></div>
                <div className="project-meta-row"><span>Host</span><span>{p.host}</span></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
