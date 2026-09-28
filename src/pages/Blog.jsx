import React from 'react';
import { Link } from 'react-router-dom';
import './SimplePage.css';

function Blog() {
  const posts = [
    { slug: 'first-web-app', title: 'How I Built My First Web App', date: 'September 2025',
      excerpt: 'Building my first web app was one of the experiences that made me more interested in technology and software development. At first, I only wanted to understand how websites and applications worked. Eventually, I decided to turn one of my ideas into a working project.' },
    { slug: 'ai-in-projects', title: 'How I Use AI in My Projects', date: 'September 2025',
      excerpt: 'Artificial intelligence has become an important part of the way I explore technology and develop my projects. I don\'t see AI as a replacement for learning or creativity. Instead, I use it as a tool that helps me explore ideas, solve problems, and work more efficiently.' },
    { slug: 'ai-assisted-programming', title: 'AI-Assisted Programming: Benefits and Limitations', date: 'October 2025',
      excerpt: 'Artificial intelligence is changing the way people learn and develop software. AI-assisted programming allows developers to use AI tools to generate code, explain concepts, identify errors, and explore different approaches to solving problems.' },
    { slug: 'prompt-engineering-beginners', title: 'Prompt Engineering for Beginners', date: 'October 2025',
      excerpt: 'As artificial intelligence becomes more common, knowing how to communicate effectively with AI systems has become an increasingly useful skill. One way to improve the results you get from AI is through prompt engineering.' },
    { slug: 'innovation-matters', title: 'Why I Believe Innovation Matters', date: 'November 2025',
      excerpt: 'Innovation has always been connected to progress. It is not simply about creating something completely new. Sometimes, innovation means finding a better way to solve an existing problem, improving something that already works, or combining different ideas to create something useful.' },
    { slug: 'human-computer-interaction', title: 'The Future of Human-Computer Interaction', date: 'November 2025',
      excerpt: 'Human-computer interaction, or HCI, is the way people communicate and interact with computers and digital systems. From keyboards and mice to touchscreens and voice assistants, the way we interact with technology has continuously evolved.' },
    { slug: 'responsible-ai', title: 'Responsible Use of Artificial Intelligence', date: 'December 2025',
      excerpt: 'Artificial intelligence is becoming a powerful part of modern technology. It can help people learn, create, solve problems, automate tasks, and explore ideas that were once difficult to achieve. However, having access to powerful technology also means having a responsibility to use it properly.' },
    { slug: 'personal-ai-assistants', title: 'The Future of Personal AI Assistants', date: 'December 2025',
      excerpt: 'Artificial intelligence assistants are already becoming part of everyday life. They can answer questions, help with research, generate content, write code, organize information, and assist with creative work. However, I believe today\'s AI assistants are only the beginning.' },
  ];

  return (
    <div className="simple-page page">
      <div className="wrap">
        <header className="page-header reveal">
          <p className="eyebrow">Blog</p>
          <h1>Thoughts &amp; Writing</h1>
          <p>Notes on tech, learning, design, and my journey as a developer.</p>
        </header>

        <div className="blog-grid">
          {posts.map((p, i) => (
            <article className="blog-card card" key={p.slug}>
              <span className="blog-date">{p.date}</span>
              <h3>{p.title}</h3>
              <p>{p.excerpt}</p>
              <Link to={'/blog/' + p.slug} className="blog-read">Read the full blog →</Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
