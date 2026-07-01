/*
 * Build step for PWB 2026.
 *  - Pre-compiles the JSX sources to plain JS (no Babel-standalone at runtime).
 *  - Bundles the 5 token CSS files into a single styles.css (kills the @import
 *    waterfall) and loads Google Fonts in parallel via <link> instead of @import.
 *  - Rewrites the HTML to use production React + the prebuilt assets.
 *
 * Edit the .jsx / tokens/*.css sources, then regenerate with:
 *     npm install @babel/standalone@7.29.0
 *     node build.js
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

// 1b) Bundle the token CSS files into a single styles.css (one request instead of 6).
const FONT_HREF = "https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500;1,600&display=swap";
const tokenOrder = ['fonts.css', 'colors.css', 'typography.css', 'spacing.css', 'base.css'];
let css = '/* AUTO-GENERATED bundle — edit tokens/*.css instead, then run node build.js */\n';
for (const t of tokenOrder) {
  let c = fs.readFileSync(path.join(ROOT, 'tokens', t), 'utf8');
  c = c.replace(/@import url\("https:\/\/fonts\.googleapis[^"]*"\);?\s*/g, ''); // fonts moved to <link>
  css += '\n/* ===== tokens/' + t + ' ===== */\n' + c.trim() + '\n';
}
fs.writeFileSync(path.join(ROOT, 'styles.css'), css);
console.log('bundled -> styles.css');

// 2) Rewrite the HTML files
const htmlFiles = ['home.html', 'daftar.html', 'sponsor.html'];
// Prefetch the other pages + their app bundles so navigation feels instant.
const PREFETCH = {
  'home.html': ['daftar.html', 'registration-app.js', 'sponsor.html', 'sponsor-app.js'],
  'daftar.html': ['sponsor.html', 'sponsor-app.js'],
  'sponsor.html': ['daftar.html', 'registration-app.js'],
};
const FONT_LINKS =
  '<link rel="preconnect" href="https://fonts.googleapis.com" />\n' +
  '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />\n' +
  '<link rel="stylesheet" href="' + FONT_HREF + '" />\n';
for (const hf of htmlFiles) {
  let html = fs.readFileSync(path.join(ROOT, hf), 'utf8');
  // production React (drop dev-build integrity hashes)
  html = html.replace(/<script src="https:\/\/unpkg\.com\/react@18\.3\.1\/umd\/react\.development\.js"[^>]*><\/script>/,
    '<script src="https://unpkg.com/react@18.3.1/umd/react.production.min.js" crossorigin="anonymous"></script>');
  html = html.replace(/<script src="https:\/\/unpkg\.com\/react-dom@18\.3\.1\/umd\/react-dom\.development\.js"[^>]*><\/script>/,
    '<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js" crossorigin="anonymous"></script>');
  // drop Babel runtime
  html = html.replace(/[ \t]*<script src="https:\/\/unpkg\.com\/@babel\/standalone@7\.29\.0\/babel\.min\.js"[^>]*><\/script>\n/, '');
  // jsx -> js
  html = html.replace(/<script type="text\/babel" src="([^"]+)\.jsx"><\/script>/g, '<script src="$1.js"></script>');
  // inline babel -> compiled
  html = html.replace(/<script type="text\/babel">([\s\S]*?)<\/script>/g, (m, inner) => '<script>\n' + compile(inner) + '\n</script>');
  // load Google Fonts in parallel via <link> (once)
  if (!html.includes('fonts.googleapis.com')) {
    html = html.replace('<link rel="stylesheet" href="styles.css" />', FONT_LINKS + '<link rel="stylesheet" href="styles.css" />');
  }
  // prefetch sibling pages + their app bundles so clicking a nav button is instant (once)
  if (!html.includes('rel="prefetch"')) {
    const pf = (PREFETCH[hf] || []).map((h) => '<link rel="prefetch" href="' + h + '" />').join('\n');
    if (pf) html = html.replace('<link rel="stylesheet" href="styles.css" />', '<link rel="stylesheet" href="styles.css" />\n' + pf);
  }
  fs.writeFileSync(path.join(ROOT, hf), html);
  console.log('rewrote', hf);
}
console.log('DONE');
