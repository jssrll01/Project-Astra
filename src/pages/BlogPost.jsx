import React, { useRef, useEffect } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import './SimplePage.css';
import { posts } from './blogContent';
import { downloadBlogAsPdf } from './blogPdf';

function BlogPost() {
  const { slug } = useParams();
  const [searchParams] = useSearchParams();
  const post = posts.find(p => p.slug === slug);
  const contentRef = useRef(null);
  const triggered = useRef(false);

  useEffect(() => {
    if (!post) return;
    if (searchParams.get('dl') === '1' && contentRef.current && !triggered.current) {
      triggered.current = true;
      setTimeout(() => {
        downloadBlogAsPdf(post.title, post.date, contentRef.current, post.slug);
      }, 400);
    }
  }, [post, searchParams]);

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
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 8 }}>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download PDF
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
