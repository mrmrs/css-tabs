const fs = require('fs');
const path = require('path');
const { transform } = require('lightningcss');

const srcFile = path.join(__dirname, 'src', 'tabs.css');
const distDir = path.join(__dirname, 'dist');

// Read source
const source = fs.readFileSync(srcFile, 'utf8');

// Ensure dist directory exists
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Unminified — just normalize formatting
const { code: unminified } = transform({
  filename: 'tabs.css',
  code: Buffer.from(source),
  minify: false,
});

fs.writeFileSync(path.join(distDir, 'tabs.css'), unminified);

// Minified
const { code: minified } = transform({
  filename: 'tabs.css',
  code: Buffer.from(source),
  minify: true,
});

fs.writeFileSync(path.join(distDir, 'tabs.min.css'), minified);

console.log('Build complete:');
console.log(`  dist/tabs.css     ${unminified.length} bytes`);
console.log(`  dist/tabs.min.css ${minified.length} bytes`);
