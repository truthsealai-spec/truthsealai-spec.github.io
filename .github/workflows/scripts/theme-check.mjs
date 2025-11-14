import fs from 'node:fs';

const css = fs.readFileSync('assets/ts-theme.css', 'utf8');

if (!/TruthSeal Neon Theme v1\.2/.test(css)) {
  console.error('Theme header missing or wrong version (expect v1.2).');
  process.exit(1);
}

const vars = ['--bg','--panel','--ink','--muted','--line','--chip','--link','--accent','--accent-2'];
const missing = vars.filter(v => !css.includes(v + ':'));
if (missing.length) {
  console.error('Missing CSS vars: ' + missing.join(', '));
  process.exit(1);
}

console.log('Theme check OK');
