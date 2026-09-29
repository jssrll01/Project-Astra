import React from 'react';
import './SimplePage.css';

function Library() {
  const modules = [
    {
      category: 'Programming Fundamentals',
      items: [
        { code: 'IT 111', title: 'Introduction to Computing', desc: 'History of computing, basic concepts, and digital literacy.' },
        { code: 'IT 121', title: 'Computer Programming 1', desc: 'Fundamentals of programming using C.' },
        { code: 'IT 122', title: 'Computer Programming 2', desc: 'Advanced programming with C++ or Java.' },
      ],
    },
    {
      category: 'Data & Databases',
      items: [
        { code: 'IT 211', title: 'Data Structures and Algorithms', desc: 'Arrays, linked lists, trees, sorting, and searching.' },
        { code: 'IT 212', title: 'Database Management Systems', desc: 'Relational databases, SQL, and normalization.' },
        { code: 'IT 311', title: 'Advanced Database Systems', desc: 'NoSQL, distributed databases, and optimization.' },
      ],
    },
    {
      category: 'Web & Mobile',
      items: [
        { code: 'IT 221', title: 'Web Systems and Technologies', desc: 'HTML, CSS, JavaScript, and full-stack fundamentals.' },
        { code: 'IT 321', title: 'Mobile Application Development', desc: 'Building mobile apps for Android and iOS.' },
      ],
    },
    {
      category: 'Networking & Security',
      items: [
        { code: 'IT 231', title: 'Platform Technologies', desc: 'Operating systems, networking basics, and virtualization.' },
        { code: 'IT 322', title: 'Information Assurance and Security', desc: 'Security principles, cryptography, and risk management.' },
      ],
    },
    {
      category: 'Professional & Advanced',
      items: [
        { code: 'IT 411', title: 'Capstone Project 1', desc: 'Research and proposal for final year project.' },
        { code: 'IT 412', title: 'Capstone Project 2', desc: 'Implementation and defense of final project.' },
        { code: 'IT 313', title: 'Systems Integration and Architecture', desc: 'Enterprise systems and integration patterns.' },
        { code: 'IT 314', title: 'Quantitative Methods', desc: 'Statistics and mathematics for IT.' },
      ],
    },
  ];

  return (
    <div className="simple-page page">
      <div className="wrap">
        <header className="page-header reveal">
          <p className="eyebrow">Library</p>
          <h1>Modules &amp; Courses</h1>
          <p>The BSIT curriculum I'm working through at Mindoro State University.</p>
        </header>

        {modules.map((cat) => (
          <section className="lib-category" key={cat.category}>
            <h2 className="lib-title">{cat.category}</h2>
            <div className="lib-list">
              {cat.items.map((m) => (
                <div className="lib-card card" key={m.code}>
                  <span className="lib-code">{m.code}</span>
                  <h3>{m.title}</h3>
                  <p>{m.desc}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default Library;
