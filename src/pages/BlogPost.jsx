import React, { useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import './SimplePage.css';
import { posts } from './blogContent';

function BlogPost() {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);
  const contentRef = useRef(null);

  if (!post) {
    return (
      <div className="simple-page page">
        <div className="wrap not-found-wrap">
          <h1>Blog not found</h1>
          <Link to="/blog" className="btn btn-primary">Back to Blog</Link>
        </div>
      </div>
    );
  }

  const related = posts.filter(p => p.slug !== slug).slice(0, 3);

  return (
    <div className="simple-page page">
      <div className="wrap">
        <Link to="/blog" className="btn btn-ghost back-btn">Back to Blog</Link>
        <article className="blog-post card">
          <h1>{post.title}</h1>
          <span className="post-meta">{post.date}</span>
          <div ref={contentRef}>{post.content}</div>
        </article>

        <section className="related-posts">
          <h2>Related Posts</h2>
          <div className="related-grid">
            {related.map((r) => (
              <Link to={'/blog/' + r.slug} className="related-card card" key={r.slug}>
                <span className="related-date">{r.date}</span>
                <h3>{r.title}</h3>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default BlogPost;
