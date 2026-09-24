import React from 'react';
import './SimplePage.css';
function PromptProgramming() {
  const prompts = [
    { title: 'E-commerce', prompt: 'Act as a professional full-stack developer and help me build a modern e-commerce application. Include user registration, login, product catalog, search, filtering, shopping cart, checkout, order management, user profiles, and admin dashboard. Create the system using clean, maintainable, responsive, and secure code.' },
    { title: 'Web Application', prompt: 'Act as a senior software developer and help me transform this idea into a functional web application. Identify required features, user flow, database structure, frontend, backend, APIs, authentication, and deployment. Recommend an appropriate technology stack.' },
    { title: 'Debugging', prompt: 'Act as an experienced software engineer and debug the following code. Identify the exact problem, explain why it happens, provide the corrected version, and explain what was changed. Check for additional bugs, security problems, and edge cases.' },
    { title: 'Code Optimization', prompt: 'Act as a professional software engineer and review the following code. Improve its readability, maintainability, performance, and reliability while preserving existing functionality.' },
    { title: 'Authentication System', prompt: 'Act as a senior application security and full-stack developer and design a secure authentication system. Include registration, email verification, login, logout, password reset, session management, password hashing, input validation, and rate limiting.' },
    { title: 'Database Design', prompt: 'Act as a professional database architect and design a database for this application. Identify entities, fields, relationships, primary keys, foreign keys, indexes, constraints, and validation rules. Recommend SQL or NoSQL.' },
    { title: 'Code Explanation', prompt: 'Act as a programming instructor and explain the following code to me as a beginner. Explain what the program does, how each major section works, how data flows through the program, and why important concepts are used.' },
    { title: 'Project From Scratch', prompt: 'Act as my senior development mentor and guide me through building this project from scratch. Start with requirements and architecture, then guide me through setup, development, database, authentication, testing, debugging, security, optimization, and deployment.' }
  ];
  return (
    <div className="simple-page page">
      <div className="wrap">
        <header className="page-header reveal">
          <p className="eyebrow">Prompt Engineering Lab — Programming</p>
          <h1>Programming Prompt Experiments</h1>
          <p>How I use AI to assist with code generation, review, and learning.</p>
        </header>
        <div className="prompt-list">
          {prompts.map((p, i) => (
            <div className={'prompt-item glass reveal reveal-delay-' + ((i % 3) + 1)} key={p.title}>
              <h3>{p.title}</h3>
              <p className="prompt-text">{p.prompt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default PromptProgramming;
