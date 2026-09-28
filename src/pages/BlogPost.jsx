import React, { useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import './SimplePage.css';
import { posts } from './blogContent';
import { downloadBlogAsPdf } from './blogPdf';

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

  const handleDownload = () => {
    if (contentRef.current) {
      downloadBlogAsPdf(post.title, post.date, contentRef.current, post.slug);
    }
  };

  return (
    <div className="simple-page page">
      <div className="wrap">
        <Link to="/blog" className="post-back">← Return to Blog</Link>
        <article className="blog-post card">
          <div className="post-actions">
            <button className="btn btn-ghost download-pdf-btn" onClick={handleDownload}>
              ⤓ Download PDF
            </button>
          </div>
          <h1>{post.title}</h1>
          <span className="post-meta">{post.date}</span>
          <div ref={contentRef}>{post.content}</div>
        </article>
      </div>
    </div>
  );
}

export default BlogPost;
