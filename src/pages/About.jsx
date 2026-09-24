import React from 'react';
import useScramble from '../hooks/useScramble';
import './About.css';

function About() {
  const hobbies = ['Badminton','Mobile Legends','Call of Duty Mobile','Minecraft','UI Design','Video Editing'];
  const values = ['Innovation','Learning','Creativity','Usefulness','Responsibility','Curiosity','Perseverance','Integrity','Collaboration','Empathy','Growth','Authenticity','Excellence','Open-mindedness','Consistency','Passion','Resilience','Focus','Adaptability','Purpose'];
  const funFacts = [
    'I often fall asleep in the middle of class, especially during major subjects. ',
    'I can spend hours working on something once I become genuinely interested in it.',
    'I like experimenting with technology just to see what I can make it do.',
    'I enjoy turning simple ideas into unnecessarily advanced projects. ',
    'I sometimes start a project without knowing how I am going to finish it.',
    'I learn better by actually building things than by simply reading about them.',
    'I enjoy exploring AI tools and discovering unusual ways to use them.',
    'I can become extremely focused when working on a project I like.',
    'I enjoy designing interfaces almost as much as programming them.',
    'I do not always know the answer, but I enjoy figuring it out.'
  ];
  const title = useScramble('Jessrell M. Custodio', 1400);

  return (
    <div className="about-page page">
      <div className="wrap">
        <header className="page-header reveal">
          <p className="eyebrow">About Me</p>
          <h1>{title}</h1>
          <p>Technology enthusiast, aspiring developer, and creative problem-solver.</p>
        </header>

        <div className="about-cols">
          <section className="about-block reveal">
            <h2>My Story</h2>
            <p>My interest in technology grew from wanting to understand how digital platforms and applications work. Instead of only using technology, I started exploring how to build my own projects. Every project gives me an opportunity to learn something new, solve problems, and improve my skills.</p>
            <p>What began as simple curiosity — "how does this website actually work?" — slowly turned into a full pursuit. I started with HTML and CSS, moved into JavaScript, then Python, then Java. Each new language felt like unlocking a new way of thinking. I would spend evenings taking apart tutorials, breaking them, fixing them, and rebuilding them until I truly understood what every line did.</p>
            <p>Along the way I discovered artificial intelligence — not just as a tool, but as a creative partner. I began using AI to assist with code, explore UI concepts, and compose music. I found that the most exciting part of technology is not just what it can do, but what it lets me do. Every project — finished or abandoned — has taught me something I could not have learned from a book alone.</p>
            <p>Today, as a BSIT student at Mindoro State University, I am building a foundation in programming, design, and creative technology. I am still early in my journey, and I would not have it any other way. The path ahead is long, and that is exactly what makes it worth walking.</p>
          </section>

          <section className="about-block reveal">
            <h2>My Philosophy</h2>
            <blockquote className="philosophy">"I believe the best way to understand technology is to create with it. Every project, whether successful or not, is an opportunity to learn."</blockquote>
            <p>Technology is not just a tool — it is a canvas for ideas. The act of building, breaking, and rebuilding is where true understanding lives. Every bug is a lesson, every failure a stepping stone, and every finished project a story of persistence.</p>
            <p>I approach each challenge with curiosity rather than fear, treating the unknown as an invitation to explore. When I build, I am not just writing code — I am shaping how people experience the digital world.</p>
          </section>

          <section className="about-block reveal">
            <h2>Interests &amp; Focus</h2>
            <p>I am passionate about Artificial Intelligence and its potential to transform creativity, technology, and everyday life. I explore AI tools, study how intelligent systems work, and discover new ways to use AI for music, design, software, and innovative projects.</p>
            <p>Beyond AI, I am deeply interested in web development, UI/UX design, and the craft of building interfaces that feel effortless to use. I love the intersection where design meets engineering — where aesthetics and function work hand in hand.</p>
          </section>

          <section className="about-block reveal">
            <h2>Goals &amp; Vision</h2>
            <p>To gain innovative experiences, continuously learn new technologies, and create unique digital projects that turn creative ideas into reality.</p>
            <p className="vision-text">To become an innovative technology creator who combines programming, artificial intelligence, UI/UX design, and creative technology to build meaningful digital solutions — projects that are not only advanced, but practical, accessible, and useful to people.</p>
          </section>

          <section className="about-block reveal">
            <h2>What Motivates Me</h2>
            <p>I am motivated by curiosity, creativity, and the challenge of turning ideas into something real. Learning how things work and building my own projects keeps me motivated.</p>
            <p>There is a particular thrill in watching something I imagined come to life — a blank screen turning into a working interface, a vague idea becoming a functional feature. I am driven by endless questions: Can I build this? How does this work? The answers always lead to new questions, and that cycle never gets old.</p>
            <p>I am also motivated by the people who will use what I create. Knowing that a project could help someone, inspire someone, or simply make their day easier gives my work meaning beyond the code itself.</p>
          </section>

          <section className="about-block reveal">
            <h2>What I Do</h2>
            <div className="roles-grid">
              <div className="role-card glass"><h3>Programmer</h3><p>Building web apps and turning ideas into working code.</p></div>
              <div className="role-card glass"><h3>UI/UX Designer</h3><p>Creating modern, user-friendly digital experiences.</p></div>
              <div className="role-card glass"><h3>AI Music Composer</h3><p>Exploring AI to compose and experiment with music.</p></div>
              <div className="role-card glass"><h3>Researcher</h3><p>Continuously learning and exploring emerging tech.</p></div>
            </div>
          </section>

          <section className="about-block reveal">
            <h2>Values</h2>
            <div className="values-list">
              {values.map(value => <span key={value} className="value-chip">{value}</span>)}
            </div>
          </section>

          <section className="about-block reveal">
            <h2>Hobbies</h2>
            <div className="hobbies-list">
              {hobbies.map(hobby => <span key={hobby} className="hobby-chip">{hobby}</span>)}
            </div>
          </section>

          <section className="about-block reveal">
            <h2>Education</h2>
            <div className="edu-line">
              <span className="edu-dot"></span>
              <div>
                <h3>Bachelor of Science in Information Technology</h3>
                <p>Mindoro State University &ndash; Calapan Campus</p>
                <span className="status">Currently Enrolled</span>
              </div>
            </div>
          </section>

          <section className="about-block reveal">
            <h2>Fun Facts</h2>
            <ul className="fun-facts">
              {funFacts.map((fact, index) => <li key={index}>{fact}</li>)}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default About;
