import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = 'Portfolio Contact from ' + formData.name;
    const body = 'Name: ' + formData.name + '%0D%0AEmail: ' + formData.email + '%0D%0A%0D%0A' + formData.message;
    window.location.href = 'mailto:custodiojessrell07@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + body;
    setSubmitted(true);
  };

  const socials = [
    { label: 'Email', value: 'custodiojessrell07@gmail.com', href: 'mailto:custodiojessrell07@gmail.com', icon: 'https://cdn.simpleicons.org/gmail/EA4335' },
    { label: 'Facebook', value: 'Jessrell Custodio', href: 'https://www.facebook.com/share/19NZJfifwE/', icon: 'https://cdn.simpleicons.org/facebook/1877F2' },
    { label: 'Instagram', value: '@jssrll01', href: 'https://www.instagram.com/', icon: 'https://cdn.simpleicons.org/instagram/E4405F' },
    { label: 'TikTok', value: '@shaomi3_', href: 'https://tiktok.com/@shaomi3_', icon: 'https://cdn.simpleicons.org/tiktok/ffffff' },
    { label: 'X (Twitter)', value: '@astrater07', href: 'https://x.com/astrater07', icon: 'https://cdn.simpleicons.org/x/ffffff' }
  ];

  return (
    <div className="contact-page page">
      <div className="wrap">
        <header className="page-header card-header">
          <p className="eyebrow">Contact</p>
        </header>

        <section className="contact-intro card">
          <h2>Get in Touch</h2>
          <p>
            Whether you have a project idea, want to collaborate, or just want to talk about
            technology and innovation — I'd love to hear from you. I'm always open to
            meaningful conversations, new connections, and exciting opportunities.
          </p>
          <p>
            If you're a fellow developer, designer, or creative — reach out. If you're a
            recruiter or someone looking for a passionate, curious learner — I'd be glad to
            connect. If you just want to share something interesting you've found in tech,
            my inbox is open.
          </p>
        </section>

        <div className="contact-grid">
          <div className="contact-info card">
            <h2>Socials &amp; Reach</h2>
            <p className="contact-note">Find me across the web — click any card to connect.</p>
            <div className="contact-links">
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="contact-item"
                >
                  <span className="contact-left">
                    <img src={s.icon} alt="" className="contact-icon" onError={(e)=>{e.target.style.display='none';}} />
                    <span className="contact-label">{s.label}</span>
                  </span>
                  <span className="contact-value">{s.value}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-form-wrapper">
            {submitted ? (
              <div className="form-success card">
                <h3>Message Ready!</h3>
                <p>Your email client should open with your message. If not, you can reach me directly at custodiojessrell07@gmail.com</p>
                <button className="btn btn-ghost" onClick={() => setSubmitted(false)}>Send Another</button>
              </div>
            ) : (
              <form className="contact-form card" onSubmit={handleSubmit}>
                <h2>Send a Message</h2>
                <p className="form-note">Fill this out and your email app will open with everything prepared.</p>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="your@gmail.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="6" placeholder="What would you like to talk about?"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
