
/**
 * Basic local harness to simulate n8n Function node I/O.
 * Usage: node tests/run.js tests/items.json
 */
const fs = require('fs');
const path = require('path');

const inputPath = process.argv[2] || path.join(__dirname, 'items.json');
const input = JSON.parse(fs.readFileSync(inputPath, 'utf8'));
const fn = require('./snippet'); // expects module.exports = (inItems) => array

(async () => {
  const out = await fn(input);
  console.log(JSON.stringify(out, null, 2));
})().catch(err => {
  console.error(err);
  process.exit(1);
});
