import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './SimplePage.css';
import { posts } from './blogContent';

function BlogPost() {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);

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

  return (
    <div className="simple-page page">
      <div className="wrap">
        <Link to="/blog" className="post-back">← Return to Blog</Link>
        <article className="blog-post card">
          <h1>{post.title}</h1>
          <span className="post-meta">{post.date}</span>
          {post.content}
        </article>
      </div>
    </div>
  );
}

export default BlogPost;
