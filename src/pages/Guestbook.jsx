import React, { useEffect, useState } from 'react';
import './SimplePage.css';

const STORAGE_KEY = 'astra_guestbook';

function Guestbook() {
  const [entries, setEntries] = useState([]);
  const [form, setForm] = useState({ name: '', message: '' });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setEntries(JSON.parse(raw));
    } catch {}
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) return;
    const entry = {
      id: Date.now(),
      name: form.name.trim(),
      message: form.message.trim(),
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
    };
    const next = [entry, ...entries].slice(0, 100);
    setEntries(next);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch {}
    setForm({ name: '', message: '' });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="simple-page page">
      <div className="wrap">
        <header className="page-header reveal">
          <p className="eyebrow">Guestbook</p>
          <h1>Leave a Message</h1>
          <p>Say hi, share feedback, or leave a thought. Messages are saved on your device.</p>
        </header>

        <form className="gb-form card" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="gb-name">Name</label>
            <input
              type="text" id="gb-name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required placeholder="Your name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="gb-message">Message</label>
            <textarea
              id="gb-message" rows="4"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required placeholder="Your message..."
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            {saved ? 'Signed!' : 'Sign Guestbook'}
          </button>
        </form>

        <div className="gb-entries">
          {entries.length === 0 ? (
            <div className="empty-note">No entries yet. Be the first to sign.</div>
          ) : (
            entries.map((entry) => (
              <div className="gb-entry card" key={entry.id}>
                <div className="gb-entry-header">
                  <span className="gb-entry-name">{entry.name}</span>
                  <span className="gb-entry-date">{entry.date}</span>
                </div>
                <p>{entry.message}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Guestbook;
