import React from 'react';
import './SimplePage.css';

function PromptProgramming() {
  const prompts = [
    { title: 'E-commerce', prompt: 'Act as a professional full-stack developer and help me build a modern e-commerce application using HTML, CSS, JavaScript, and a suitable backend technology. The application should include user registration, login, product catalog, search, filtering, shopping cart, checkout, order management, user profiles, and an admin dashboard. Create the system using clean, maintainable, responsive, and secure code. Explain the purpose of each major component, identify potential security issues, and provide the implementation step by step without skipping important configuration or dependencies.' },
    { title: 'Web Application', prompt: 'Act as a senior software developer and help me transform this idea into a functional web application. First identify the required features, user flow, database structure, frontend, backend, APIs, authentication, and deployment requirements. Then recommend an appropriate technology stack and create the application step by step using clean, scalable, responsive, and maintainable code. Explain important decisions and make sure every component works together correctly.' },
    { title: 'Debugging', prompt: 'Act as an experienced software engineer and debug the following code. Identify the exact problem, explain why it happens, provide the corrected version, and explain what was changed. Check for additional bugs, security problems, performance issues, and potential edge cases. Do not rewrite unrelated parts of the code unless necessary.' },
    { title: 'Code Optimization', prompt: 'Act as a professional software engineer and review the following code. Improve its readability, maintainability, performance, and reliability while preserving its existing functionality. Identify inefficient or unnecessary parts, explain each important improvement, and provide the optimized version. Do not introduce unnecessary dependencies or change the intended behavior.' },
    { title: 'Authentication System', prompt: 'Act as a senior application security and full-stack developer and design a secure authentication system. Include registration, email verification, login, logout, password reset, session management, password hashing, input validation, rate limiting, and account protection. Explain the architecture, database structure, authentication flow, security considerations, and implementation steps. Never store passwords or sensitive credentials in plain text.' },
    { title: 'Database Design', prompt: 'Act as a professional database architect and design a database for this application. Identify the required entities, fields, relationships, primary keys, foreign keys, indexes, constraints, and validation rules. Recommend whether SQL or NoSQL is more appropriate and explain why. Provide the database structure in a clear format and consider scalability, security, data integrity, and future expansion.' },
    { title: 'Code Explanation', prompt: 'Act as a programming instructor and explain the following code to me as a beginner. Explain what the program does, how each major section works, how the data flows through the program, and why important programming concepts are being used. Use simple language and practical examples, but do not hide important technical details.' },
    { title: 'Project From Scratch', prompt: 'Act as my senior development mentor and guide me through building this project from scratch. Assume I am still learning programming. Start with the project requirements and architecture, then guide me through setup, development, database integration, authentication if required, testing, debugging, security, optimization, and deployment. Work in logical stages, explain important concepts, and do not move to the next major stage until the current stage is complete and functional.' },
  ];
  return (
    <div className="simple-page page">
      <div className="wrap">
        <header className="page-header reveal">
          <p className="eyebrow">Prompt Engineering Lab — Programming</p>
          <h1>Programming Prompt Experiments</h1>
          <p>How I use AI to assist with code generation, review, refactoring, and learning.</p>
        </header>
        <div className="prompt-list">
          {prompts.map((p, i) => (
            <div className="prompt-item card" key={i}>
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
