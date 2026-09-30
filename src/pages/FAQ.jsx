import React, { useState } from 'react';
import './SimplePage.css';

function FAQ() {
  const categories = [
    {
      name: 'About Me',
      items: [
        { q: 'Who are you?', a: 'I\'m Jessrell M. Custodio — a 19-year-old BSIT student at Mindoro State University (Calapan Campus) and the creator behind Astra. I work as a programmer, UI/UX designer, and researcher.' },
        { q: 'Where are you based?', a: 'Calapan City, Oriental Mindoro, Philippines. I\'m available remotely for collaborations worldwide.' },
        { q: 'What are you studying?', a: 'Bachelor of Science in Information Technology at Mindoro State University — Calapan Campus. Currently enrolled.' },
        { q: 'What languages do you speak?', a: 'Filipino and English.' },
        { q: 'Are you available for collaborations?', a: 'Yes. I\'m especially interested in AI, web, or creative tech projects. Send a message with details and I\'ll reply within 24–48 hours.' },
      ],
    },
    {
      name: 'Astra',
      items: [
        { q: 'What is Astra?', a: 'Astra is my personal portfolio and technology ecosystem — where intelligence meets innovation. It documents what I\'m learning, building, and exploring in code, design, and AI.' },
        { q: 'How was Astra built?', a: 'With React 18, Vite 5, React Router 6, and hand-written CSS. It\'s deployed on Render. Read the full Documentation page for the complete breakdown.' },
        { q: 'Can I install Astra as an app?', a: 'Yes. Open the site on Chrome for Android or Safari for iOS and tap the "Install app" or "Add to Home Screen" prompt. Astra can also be installed from the Settings page.' },
      ],
    },
    {
      name: 'Skills & Work',
      items: [
        { q: 'Do you use AI to write code?', a: 'Yes, but responsibly. I treat AI as an assistant, not a replacement. Every suggestion is reviewed, tested, and understood before it goes into a project.' },
        { q: 'Do you do freelance work?', a: 'Small UI/UX or frontend projects, yes. Larger ones depend on my class schedule. Reach out with details and I\'ll reply with a plan and timeline.' },
        { q: 'Can you build a website for me?', a: 'Yes. Whether it\'s a landing page, portfolio, or small web app — reach out with what you need and I\'ll reply with a plan.' },
        { q: 'What do you do besides coding?', a: 'UI/UX design, AI research, AI music composition, and continuous learning. I also play badminton and enjoy gaming (Mobile Legends, Call of Duty Mobile, Minecraft).' },
      ],
    },
    {
      name: 'AI Music',
      items: [
        { q: 'How do you make AI music?', a: 'I use AI music tools to compose tracks, then refine them through multiple iterations — adjusting melody, mood, tempo, and structure. I direct the AI rather than letting it decide everything.' },
        { q: 'What are your tracks about?', a: 'Each track tells a small story — emotional longings, temporary moments, and quiet promises. Click "Details" on any track to read the inspiration behind it.' },
        { q: 'Can I download your tracks?', a: 'Yes. Click the download icon on any track in the AI Music page. It\'s free to download for personal listening.' },
      ],
    },
    {
      name: 'Site & Technical',
      items: [
        { q: 'Why is the site sometimes slow?', a: 'It shouldn\'t be. Astra is optimized for mobile — no heavy canvas animations, no full-screen blurs, no framer-motion. If it feels slow, try clearing your browser cache.' },
        { q: 'Why don\'t I see Astra on Google?', a: 'Search engines take days to weeks to index new sites, especially on free subdomains. Astra is verified with Google Search Console, sitemap submitted, and indexed requests queued. It will appear over time.' },
        { q: 'How can I report a bug?', a: 'Email me at custodiojessrell07@gmail.com or use the Contact page. Include what happened and, if possible, the URL where you saw it.' },
      ],
    },
    {
      name: 'Getting in Touch',
      items: [
        { q: 'What\'s the fastest way to reach you?', a: 'Email — custodiojessrell07@gmail.com. I usually respond within 24–48 hours.' },
        { q: 'Can we collaborate on a project?', a: 'Absolutely. Send a message with what you have in mind and I\'ll reply with ideas, timeline, and how we could work together.' },
        { q: 'Do you accept paid work?', a: 'Yes — for small projects, freelance work, and short-term collaborations. Larger projects depend on my class schedule.' },
        { q: 'How do I connect on social media?', a: 'Find all my links on the Contact page — Email, Facebook, Instagram, TikTok, and X (Twitter).' },
        { q: 'Can you mentor me?', a: 'I\'m still early in my own journey, but I\'m happy to share what I\'ve learned so far. Reach out if you want to compare notes.' },
      ],
    },
  ];

  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="simple-page page">
      <div className="wrap">
        <header className="page-header reveal">
          <p className="eyebrow">FAQ</p>
        </header>

        {categories.map((cat, ci) => (
          <section className="faq-category" key={cat.name}>
            <h2 className="faq-category-title">{cat.name}</h2>
            <div className="faq-list">
              {cat.items.map((item, ii) => {
                const id = ci + '-' + ii;
                const isOpen = openId === id;
                return (
                  <div className={'faq-item card' + (isOpen ? ' open' : '')} key={id}>
                    <button
                      className="faq-question"
                      onClick={() => toggle(id)}
                      aria-expanded={isOpen}
                    >
                      <span>{item.q}</span>
                      <span className="faq-caret">{isOpen ? '−' : '+'}</span>
                    </button>
                    {isOpen && (
                      <div className="faq-answer">
                        <p>{item.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        ))}

        <div className="faq-cta card">
          <h3>Still have a question?</h3>
          <p>I usually respond within 24–48 hours.</p>
          <a href="mailto:custodiojessrell07@gmail.com" className="btn btn-primary">
            Send me an email
          </a>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
