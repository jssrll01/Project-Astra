import React, { useEffect, useState } from 'react';
import './SimplePage.css';
import './PersonalVault.css';

const VERIFICATION_CODE = '101007';

// Telegram bot settings — replace with your own
const TELEGRAM_BOT_TOKEN = 'YOUR_BOT_TOKEN_HERE';
const TELEGRAM_CHAT_ID = 'YOUR_CHAT_ID_HERE';

const LOCKOUT_STEPS = [
  15000,        // 15s
  30000,        // 30s
  60000,        // 1m
  300000,       // 5m
  600000,       // 10m
  1800000,      // 30m
  3600000,      // 1h
  10800000,     // 3h
  21600000,     // 6h
  43200000,     // 12h
  86400000,     // 24h
];

const VAULT_KEY = 'astra_vault_state';

const vaultPhotos = [
  // Add personal photos here — same format as Collection
  // { id: 1, src: 'https://...', caption: 'Vault — 01' },
];

function loadVaultState() {
  try {
    const raw = localStorage.getItem(VAULT_KEY);
    if (!raw) return { failedAttempts: 0, lockedUntil: 0, unlocked: false };
    return JSON.parse(raw);
  } catch {
    return { failedAttempts: 0, lockedUntil: 0, unlocked: false };
  }
}

function saveVaultState(s) {
  try { localStorage.setItem(VAULT_KEY, JSON.stringify(s)); } catch {}
}

function formatLockout(ms) {
  const s = Math.ceil(ms / 1000);
  if (s < 60) return s + 's';
  const m = Math.ceil(s / 60);
  if (m < 60) return m + 'm';
  const h = Math.ceil(m / 60);
  if (h < 24) return h + 'h';
  const d = Math.ceil(h / 24);
  return d + 'd';
}

function PersonalVault() {
  const [state, setState] = useState(loadVaultState);
  const [stage, setStage] = useState('gate1'); // gate1 | gate2 | vault
  const [gate1Input, setGate1Input] = useState('');
  const [gate2Input, setGate2Input] = useState('');
  const [sentCode, setSentCode] = useState('');
  const [message, setMessage] = useState('');
  const [remaining, setRemaining] = useState(0);
  const [selected, setSelected] = useState(null);

  // Countdown ticker for lockout
  useEffect(() => {
    if (!state.lockedUntil || state.lockedUntil <= Date.now()) {
      setRemaining(0);
      return;
    }
    setRemaining(state.lockedUntil - Date.now());
    const t = setInterval(() => {
      const left = state.lockedUntil - Date.now();
      if (left <= 0) {
        clearInterval(t);
        setRemaining(0);
      } else {
        setRemaining(left);
      }
    }, 500);
    return () => clearInterval(t);
  }, [state.lockedUntil]);

  // If already unlocked in session, jump to vault
  useEffect(() => {
    if (state.unlocked && stage !== 'vault') {
      setStage('vault');
    }
  }, [state.unlocked, stage]);

  const locked = state.lockedUntil > Date.now();

  const handleGate1 = () => {
    if (locked) return;
    if (gate1Input.trim() === VERIFICATION_CODE) {
      setMessage('');
      setGate1Input('');
      setStage('gate2');
      sendTelegramCode();
    } else {
      registerFailure('Incorrect verification code.');
    }
  };

  const registerFailure = (msg) => {
    const nextAttempts = state.failedAttempts + 1;
    const idx = Math.min(nextAttempts - 1, LOCKOUT_STEPS.length - 1);
    const lockMs = LOCKOUT_STEPS[idx];
    const next = {
      ...state,
      failedAttempts: nextAttempts,
      lockedUntil: Date.now() + lockMs,
    };
    setState(next);
    saveVaultState(next);
    setMessage(msg + ' Locked for ' + formatLockout(lockMs) + '.');
  };

  const sendTelegramCode = async () => {
    const code = String(Math.floor(100000 + Math.random() * 900000));
    setSentCode(code);
    try {
      const url = 'https://api.telegram.org/bot' + TELEGRAM_BOT_TOKEN + '/sendMessage';
      await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: 'Astra Vault 2FA code: ' + code,
        }),
      });
      setMessage('A 6-digit code was sent to Telegram.');
    } catch (e) {
      setMessage('Failed to send code. Check bot config.');
    }
  };

  const handleGate2 = () => {
    if (locked) return;
    if (gate2Input.trim() === sentCode) {
      const next = { ...state, unlocked: true, failedAttempts: 0, lockedUntil: 0 };
      setState(next);
      saveVaultState(next);
      setGate2Input('');
      setMessage('');
      setStage('vault');
    } else {
      registerFailure('Incorrect 2FA code.');
      setGate2Input('');
    }
  };

  const lockVault = () => {
    const next = { failedAttempts: 0, lockedUntil: 0, unlocked: false };
    setState(next);
    saveVaultState(next);
    setStage('gate1');
    setMessage('');
  };

  // ---------- Render ----------

  if (stage === 'vault') {
    return (
      <div className="simple-page page">
        <div className="wrap">
          <header className="page-header reveal">
            <p className="eyebrow">Personal Vault</p>
            <h1>Private Collection</h1>
            <p>Locked content — only visible after verification.</p>
            <button className="btn btn-ghost vault-lock-btn" onClick={lockVault}>Lock Vault</button>
          </header>

          {vaultPhotos.length === 0 ? (
            <div className="empty-note reveal">Vault photos will be added here soon.</div>
          ) : (
            <div className="photo-grid">
              {vaultPhotos.map((p) => (
                <div className="photo-tile" key={p.id} onClick={() => setSelected(p)}>
                  <img src={p.src} alt={p.caption} loading="lazy" />
                  <span className="photo-caption">{p.caption}</span>
                </div>
              ))}
            </div>
          )}

          {selected && (
            <div className="art-lightbox" onClick={() => setSelected(null)}>
              <div className="art-lightbox-inner" onClick={(e) => e.stopPropagation()}>
                <img src={selected.src} alt={selected.caption} />
                <div className="art-lightbox-info">
                  <p>{selected.caption}</p>
                </div>
                <button className="art-lightbox-close" onClick={() => setSelected(null)}>×</button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="simple-page page vault-gate-page">
      <div className="wrap">
        <header className="page-header reveal">
          <p className="eyebrow">Personal Vault</p>
          <h1>{stage === 'gate1' ? 'Verification Required' : '2-Factor Authentication'}</h1>
          <p>{stage === 'gate1' ? 'Enter your verification code to continue.' : 'Enter the 6-digit code sent to Telegram.'}</p>
        </header>

        <div className="vault-gate card">
          {locked ? (
            <div className="vault-locked">
              <div className="vault-lock-icon">🔒</div>
              <h2>Vault Locked</h2>
              <p>Too many failed attempts. Try again in <strong>{formatLockout(remaining)}</strong>.</p>
            </div>
          ) : stage === 'gate1' ? (
            <>
              <label className="vault-label">Verification Code</label>
              <input
                type="password"
                className="vault-input"
                value={gate1Input}
                onChange={(e) => setGate1Input(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleGate1()}
                placeholder="Enter code"
                autoFocus
              />
              <button className="btn btn-primary vault-submit" onClick={handleGate1}>Continue</button>
            </>
          ) : (
            <>
              <label className="vault-label">2FA Code (6 digits)</label>
              <input
                type="text"
                className="vault-input"
                value={gate2Input}
                onChange={(e) => setGate2Input(e.target.value.replace(/\D/g, '').slice(0, 6))}
                onKeyDown={(e) => e.key === 'Enter' && handleGate2()}
                placeholder="••••••"
                maxLength={6}
                inputMode="numeric"
                autoFocus
              />
              <button className="btn btn-primary vault-submit" onClick={handleGate2}>Verify</button>
              <button className="btn btn-ghost vault-resend" onClick={sendTelegramCode}>Resend code</button>
            </>
          )}

          {message && <p className="vault-message">{message}</p>}
        </div>
      </div>
    </div>
  );
}

export default PersonalVault;
