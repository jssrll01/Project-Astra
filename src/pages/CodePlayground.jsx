import React, { useEffect, useMemo, useRef, useState } from 'react';
import './CodePlayground.css';
import useCopy from '../hooks/useCopy';

const DEFAULT_FILES = [
  { id: 'index-html', name: 'index.html', lang: 'html', content: '<!DOCTYPE html>\n<html>\n<head>\n  <title>Playground</title>\n  <link rel="stylesheet" href="style.css" />\n</head>\n<body>\n  <h1>Hello, Astra</h1>\n  <p>Edit the files on the left and see it run here.</p>\n  <button id="btn">Click me</button>\n  <script src="script.js"><\/script>\n</body>\n</html>' },
  { id: 'style-css', name: 'style.css', lang: 'css', content: 'body {\n  font-family: system-ui, sans-serif;\n  background: #0b1426;\n  color: #eef1f7;\n  padding: 40px;\n  text-align: center;\n}\n\nh1 {\n  color: #2dd4bf;\n}\n\nbutton {\n  background: #2dd4bf;\n  color: #06231f;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 8px;\n  cursor: pointer;\n}' },
  { id: 'script-js', name: 'script.js', lang: 'js', content: 'const btn = document.getElementById("btn");\nif (btn) {\n  btn.addEventListener("click", () => {\n    alert("Hello from Astra Playground!");\n  });\n}' },
];

const LANG_LABEL = {
  html: 'HTML',
  css: 'CSS',
  js: 'JavaScript',
};

function extFromLang(lang) {
  if (lang === 'html') return '.html';
  if (lang === 'css') return '.css';
  return '.js';
}

function sanitizeName(name) {
  return name.replace(/[^a-zA-Z0-9._-]/g, '_');
}

function CodePlayground() {
  const [files, setFiles] = useState(DEFAULT_FILES);
  const [activeId, setActiveId] = useState(DEFAULT_FILES[0].id);
  const [srcDoc, setSrcDoc] = useState('');
  const [autorun, setAutorun] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const { copiedId, copy } = useCopy();
  const debounceRef = useRef(null);
  const editorRef = useRef(null);

  const active = files.find(f => f.id === activeId) || files[0];

  // Build the preview document from current files
  const buildPreview = () => {
    const html = files.find(f => f.lang === 'html')?.content || '';
    const css = files.find(f => f.lang === 'css')?.content || '';
    const js = files.find(f => f.lang === 'js')?.content || '';

    // Inject css and js inline so the iframe runs standalone
    let doc = html;
    if (!/<\/body>/i.test(doc)) {
      doc += '\n<body></body>';
    }
    // Remove external link/script refs, we inline instead
    doc = doc.replace(/<link[^>]*href=["']style\.css["'][^>]*>/gi, '');
    doc = doc.replace(/<script[^>]*src=["']script\.js["'][^>]*>\s*<\/script>/gi, '');

    const injectedCss = '<style>\n' + css + '\n</style>';
    const injectedJs = '<script>\ntry {\n' + js + '\n} catch (e) { console.error(e); }\n<\/script>';

    if (/<\/head>/i.test(doc)) {
      doc = doc.replace(/<\/head>/i, injectedCss + '\n</head>');
    } else {
      doc = injectedCss + doc;
    }

    if (/<\/body>/i.test(doc)) {
      doc = doc.replace(/<\/body>/i, injectedJs + '\n</body>');
    } else {
      doc += injectedJs;
    }

    return doc;
  };

  // Run preview (with optional debounce when autorun is on)
  const runNow = () => setSrcDoc(buildPreview());

  useEffect(() => {
    if (!autorun) return;
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(runNow, 400);
    return () => clearTimeout(debounceRef.current);
  }, [files, autorun]);

  // First mount: render once
  useEffect(() => { runNow(); }, []);

  const updateActiveContent = (value) => {
    setFiles(prev => prev.map(f => f.id === activeId ? { ...f, content: value } : f));
  };

  const addFile = () => {
    const name = window.prompt('File name (with extension: .html, .css, or .js)');
    if (!name) return;
    const safe = sanitizeName(name);
    const lower = safe.toLowerCase();
    let lang = 'js';
    if (lower.endsWith('.html')) lang = 'html';
    else if (lower.endsWith('.css')) lang = 'css';
    else if (lower.endsWith('.js')) lang = 'js';
    else {
      window.alert('Only .html, .css, and .js are supported.');
      return;
    }
    const id = lang + '-' + Date.now();
    setFiles(prev => [...prev, { id, name: safe, lang, content: '' }]);
    setActiveId(id);
  };

  const deleteFile = (id) => {
    if (files.length <= 1) {
      window.alert('At least one file is required.');
      return;
    }
    if (!window.confirm('Delete this file?')) return;
    const remaining = files.filter(f => f.id !== id);
    setFiles(remaining);
    if (activeId === id) setActiveId(remaining[0].id);
  };

  const resetAll = () => {
    if (!window.confirm('Reset to default template? All changes will be lost.')) return;
    setFiles(DEFAULT_FILES);
    setActiveId(DEFAULT_FILES[0].id);
  };

  const downloadFile = (file) => {
    const blob = new Blob([file.content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = file.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const downloadAll = () => {
    const doc = buildPreview();
    const blob = new Blob([doc], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'astra-playground.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleTab = (e) => {
    if (e.key !== 'Tab') return;
    e.preventDefault();
    const el = e.target;
    const start = el.selectionStart;
    const end = el.selectionEnd;
    const value = el.value;
    const next = value.substring(0, start) + '  ' + value.substring(end);
    updateActiveContent(next);
    requestAnimationFrame(() => {
      el.selectionStart = el.selectionEnd = start + 2;
    });
  };

  const lineCount = useMemo(() => active.content.split('\n').length, [active.content]);

  return (
    <div className="simple-page page playground-page">
      <div className="wrap">
        <header className="page-header reveal">
          <p className="eyebrow">Code Playground</p>
          <h1>Write, Run, Export</h1>
          <p>A tiny in-browser editor for HTML, CSS, and JavaScript. Files run together in the preview.</p>
        </header>

        <div className="pg-toolbar card">
          <div className="pg-toolbar-left">
            <button className="btn btn-ghost pg-btn" onClick={addFile}>+ New File</button>
            <button className="btn btn-ghost pg-btn" onClick={resetAll}>Reset</button>
            <button className="btn btn-primary pg-btn" onClick={runNow}>▶ Run</button>
          </div>
          <div className="pg-toolbar-right">
            <label className="pg-toggle">
              <input type="checkbox" checked={autorun} onChange={(e) => setAutorun(e.target.checked)} />
              <span>Auto-run</span>
            </label>
            <label className="pg-toggle">
              <input type="checkbox" checked={showPreview} onChange={(e) => setShowPreview(e.target.checked)} />
              <span>Preview</span>
            </label>
          </div>
        </div>

        <div className={'pg-grid' + (showPreview ? '' : ' no-preview')}>
          <div className="pg-editor card">
            <div className="pg-tabs">
              {files.map(f => (
                <div
                  key={f.id}
                  className={'pg-tab' + (f.id === activeId ? ' active' : '')}
                  onClick={() => setActiveId(f.id)}
                >
                  <span className={'pg-lang-badge lang-' + f.lang}>{LANG_LABEL[f.lang]}</span>
                  <span className="pg-tab-name">{f.name}</span>
                  <button
                    className="pg-tab-close"
                    onClick={(e) => { e.stopPropagation(); deleteFile(f.id); }}
                    aria-label="Delete file"
                  >×</button>
                </div>
              ))}
            </div>

            <div className="pg-editor-header">
              <span className="pg-file-name">{active.name}</span>
              <div className="pg-editor-actions">
                <button
                  className={'copy-btn' + (copiedId === active.id ? ' copied' : '')}
                  onClick={() => copy(active.content, active.id)}
                >
                  {copiedId === active.id ? 'Copied' : 'Copy'}
                </button>
                <button className="copy-btn" onClick={() => downloadFile(active)}>Download</button>
              </div>
            </div>

            <textarea
              ref={editorRef}
              className="pg-code"
              spellCheck={false}
              value={active.content}
              onChange={(e) => updateActiveContent(e.target.value)}
              onKeyDown={handleTab}
            />

            <div className="pg-status">
              <span>{LANG_LABEL[active.lang]}</span>
              <span>{lineCount} lines</span>
              <span>{active.content.length} chars</span>
            </div>
          </div>

          {showPreview && (
            <div className="pg-preview card">
              <div className="pg-preview-header">
                <span>Preview</span>
                <button className="copy-btn" onClick={runNow}>↻ Refresh</button>
              </div>
              <iframe
                title="Astra Playground Preview"
                className="pg-preview-frame"
                srcDoc={srcDoc}
                sandbox="allow-scripts allow-modals allow-forms allow-popups"
              />
            </div>
          )}
        </div>

        <div className="pg-note card">
          <strong>Tips:</strong> Use <code>index.html</code>, <code>style.css</code>, and <code>script.js</code> for the default three-pane setup.
          Add more files with <em>+ New File</em> — each file keeps its own content.
        </div>
      </div>
    </div>
  );
}

export default CodePlayground;
