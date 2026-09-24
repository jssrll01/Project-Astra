import React from 'react';
import './Skills.css';

function Skills() {
  const programming = [
    { name: 'HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
    { name: 'CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    { name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'Java', url: 'https://www.java.com' },
    { name: 'Python', url: 'https://www.python.org' },
    { name: 'C#', url: 'https://learn.microsoft.com/en-us/dotnet/csharp/' },
    { name: 'C', url: 'https://en.wikipedia.org/wiki/C_(programming_language)' },
    { name: 'C++', url: 'https://isocpp.org' },
    { name: 'PHP', url: 'https://www.php.net' },
    { name: 'TypeScript', url: 'https://www.typescriptlang.org' },
    { name: 'SQL', url: 'https://en.wikipedia.org/wiki/SQL' },
    { name: 'Bootstrap', url: 'https://getbootstrap.com' },
    { name: 'React', url: 'https://react.dev' },
    { name: 'Node.js', url: 'https://nodejs.org' },
    { name: 'Next.js', url: 'https://nextjs.org' },
    { name: 'Tailwind CSS', url: 'https://tailwindcss.com' }
  ];

  const tools = [
    { name: 'Figma', url: 'https://www.figma.com', icon: 'https://cdn.simpleicons.org/figma/F24E1E' },
    { name: 'Visual Studio', url: 'https://visualstudio.microsoft.com', icon: 'https://cdn.simpleicons.org/visualstudio/5C2D91' },
    { name: 'VS Code', url: 'https://code.visualstudio.com', icon: 'https://cdn.simpleicons.org/visualstudiocode/007ACC' },
    { name: 'Claude AI', url: 'https://claude.ai', icon: 'https://cdn.simpleicons.org/anthropic/D4A27F' },
    { name: 'GitHub', url: 'https://github.com', icon: 'https://cdn.simpleicons.org/github/ffffff' },
    { name: 'Vercel', url: 'https://vercel.com', icon: 'https://cdn.simpleicons.org/vercel/ffffff' },
    { name: 'Netlify', url: 'https://www.netlify.com', icon: 'https://cdn.simpleicons.org/netlify/00C7B7' },
    { name: 'Railway', url: 'https://railway.app', icon: 'https://cdn.simpleicons.org/railway/ffffff' },
    { name: 'Gemini', url: 'https://gemini.google.com', icon: 'https://cdn.simpleicons.org/googlegemini/8E75B2' },
    { name: 'MongoDB', url: 'https://www.mongodb.com', icon: 'https://cdn.simpleicons.org/mongodb/47A248' },
    { name: 'Supabase', url: 'https://supabase.com', icon: 'https://cdn.simpleicons.org/supabase/3ECF8E' },
    { name: 'ChatGPT', url: 'https://chat.openai.com', icon: 'https://cdn.simpleicons.org/openai/ffffff' },
    { name: 'Canva', url: 'https://www.canva.com', icon: 'https://cdn.simpleicons.org/canva/00C4CC' },
    { name: 'GitHub Copilot', url: 'https://github.com/features/copilot', icon: 'https://cdn.simpleicons.org/githubcopilot/ffffff' },
    { name: 'MySQL', url: 'https://www.mysql.com', icon: 'https://cdn.simpleicons.org/mysql/4479A1' },
    { name: 'PostgreSQL', url: 'https://www.postgresql.org', icon: 'https://cdn.simpleicons.org/postgresql/4169E1' },
    { name: 'Cloudflare', url: 'https://www.cloudflare.com', icon: 'https://cdn.simpleicons.org/cloudflare/F38020' },
    { name: 'Firebase', url: 'https://firebase.google.com', icon: 'https://cdn.simpleicons.org/firebase/FFCA28' },
    { name: 'Cloudinary', url: 'https://cloudinary.com', icon: 'https://cdn.simpleicons.org/cloudinary/3448C5' },
    { name: 'Suno', url: 'https://suno.com', icon: 'https://cdn.simpleicons.org/suno/ffffff' },
    { name: 'Docker', url: 'https://www.docker.com', icon: 'https://cdn.simpleicons.org/docker/2496ED' },
    { name: 'Git', url: 'https://git-scm.com', icon: 'https://cdn.simpleicons.org/git/F05032' }
  ];

  const strengths = [
    { name: 'Creativity', description: 'Turning simple ideas into advanced projects.' },
    { name: 'Problem-Solving', description: 'Figuring things out through experimentation.' },
    { name: 'Curiosity', description: 'Always exploring and learning new technologies.' }
  ];

  return (
    <div className="skills-page page">
      <div className="wrap">
        <header className="page-header reveal">
          <p className="eyebrow">Skills</p>
          <h1>What I Work With</h1>
          <p>Technologies, tools, and abilities I've developed through hands-on learning.</p>
        </header>

        <div className="skill-block glass">
          <h4 className="skill-label teal">Assisted Programming</h4>
          <div className="chips">
            {programming.map(item => (
              <a key={item.name} href={item.url} target="_blank" rel="noopener noreferrer" className="chip">{item.name}</a>
            ))}
          </div>
        </div>

        <div className="skill-block glass">
          <h4 className="skill-label coral">Tools</h4>
          <div className="chips">
            {tools.map(item => (
              <a key={item.name} href={item.url} target="_blank" rel="noopener noreferrer" className="chip tool-chip">
                <img
                  src={item.icon}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  width="16"
                  height="16"
                  className="chip-icon"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <span>{item.name}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="skills-bottom">
          <section className="strengths-section glass">
            <h2>My Strengths</h2>
            <div className="strengths-grid">
              {strengths.map(s => (
                <div className="strength-card" key={s.name}>
                  <h3>{s.name}</h3>
                  <p>{s.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="learning-section glass">
            <h2>How I Learn</h2>
            <p>
              My learning style is driven by curiosity and persistence. I learn best through
              hands-on experimentation — building projects, breaking them, and rebuilding until
              they work the way I intended. When something genuinely interests me, I stay with
              it until I can turn what I've learned into something practical.
            </p>
            <p>
              I combine self-study with AI-assisted exploration. I use tools like ChatGPT,
              Claude, and Gemini as thinking partners — asking questions, generating examples,
              and reviewing my code. But I always verify, test, and rewrite in my own style,
              because understanding comes from doing.
            </p>
            <p>
              Formal coursework at Mindoro State University gives me structure — algorithms,
              databases, and programming fundamentals. Self-study gives me speed and range.
              Together, they keep me moving.
            </p>
            <ul className="learn-list">
              <li>Build first, read second</li>
              <li>Break things intentionally to understand them</li>
              <li>Ask AI to explain, not to replace</li>
              <li>Ship small projects, learn from feedback</li>
              <li>Read other people's code every week</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Skills;
