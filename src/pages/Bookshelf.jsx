import React from 'react';
import './SimplePage.css';

const books = [
  { title: 'Atomic Habits', author: 'James Clear', status: 'Finished', takeaway: 'Small changes compound into remarkable results.' },
  { title: 'Deep Work', author: 'Cal Newport', status: 'Finished', takeaway: 'Focus is a superpower in a distracted world.' },
  { title: 'The Pragmatic Programmer', author: 'Hunt & Thomas', status: 'Reading', takeaway: 'Pragmatic habits that make better developers.' },
  { title: 'Clean Code', author: 'Robert C. Martin', status: 'Reading', takeaway: 'Code should read like well-written prose.' },
  { title: 'Designing Data-Intensive Applications', author: 'Martin Kleppmann', status: 'Want to Read', takeaway: 'The systems behind reliable software.' },
  { title: 'Don\'t Make Me Think', author: 'Steve Krug', status: 'Finished', takeaway: 'Usability principles every designer should know.' },
];

function Bookshelf() {
  return (
    <div className="simple-page page">
      <div className="wrap">
        <header className="page-header reveal">
          <p className="eyebrow">Bookshelf</p>
          <h1>What I'm Reading</h1>
          <p>Books that have shaped how I think about code, design, and life.</p>
        </header>

        <div className="bookshelf-grid">
          {books.map((b, i) => (
            <div className={`book-card card status-${b.status.toLowerCase().replace(/ /g, '-')}`} key={i}>
              <span className="book-status">{b.status}</span>
              <h3>{b.title}</h3>
              <p className="book-author">by {b.author}</p>
              <p className="book-takeaway">"{b.takeaway}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Bookshelf;
