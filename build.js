/*
 * Build step for PWB 2026 — pre-compiles the JSX sources to plain JS so the
 * browser no longer needs Babel-standalone at runtime (much faster page loads).
 *
 * Edit the .jsx source files, then regenerate the .js + rewrite the HTML with:
 *     npm install @babel/standalone@7.29.0
 *     node build.js
 *
 * The committed .js files are what the site actually loads; the .jsx files are
 * the source of truth.
 */
const Babel = require('@babel/standalone');
const fs = require('fs');
const path = require('path');
const ROOT = __dirname;

const compile = (code) => Babel.transform(code, { presets: ['react'] }).code;

// 1) Transpile each .jsx -> .js
const jsxFiles = ['ui.jsx', 'parts-top.jsx', 'parts-bottom.jsx', 'registration-app.jsx', 'sponsor-app.jsx'];
for (const f of jsxFiles) {
  const out = compile(fs.readFileSync(path.join(ROOT, f), 'utf8'));
  const dst = f.replace(/\.jsx$/, '.js');
  fs.writeFileSync(path.join(ROOT, dst), '/* AUTO-GENERATED from ' + f + ' — do not edit directly */\n' + out);
  console.log('compiled', f, '->', dst);
}

// 2) Rewrite the HTML files: production React, drop Babel runtime, point to .js
const htmlFiles = ['index.html', 'daftar.html', 'sponsor.html'];
for (const hf of htmlFiles) {
  let html = fs.readFileSync(path.join(ROOT, hf), 'utf8');
  html = html.replace(/<script src="https:\/\/unpkg\.com\/react@18\.3\.1\/umd\/react\.development\.js"[^>]*><\/script>/,
    '<script src="https://unpkg.com/react@18.3.1/umd/react.production.min.js" crossorigin="anonymous"></script>');
  html = html.replace(/<script src="https:\/\/unpkg\.com\/react-dom@18\.3\.1\/umd\/react-dom\.development\.js"[^>]*><\/script>/,
    '<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js" crossorigin="anonymous"></script>');
  html = html.replace(/[ \t]*<script src="https:\/\/unpkg\.com\/@babel\/standalone@7\.29\.0\/babel\.min\.js"[^>]*><\/script>\n/, '');
  html = html.replace(/<script type="text\/babel" src="([^"]+)\.jsx"><\/script>/g, '<script src="$1.js"></script>');
  html = html.replace(/<script type="text\/babel">([\s\S]*?)<\/script>/g, (m, inner) => '<script>\n' + compile(inner) + '\n</script>');
  fs.writeFileSync(path.join(ROOT, hf), html);
  console.log('rewrote', hf);
}
console.log('DONE');
