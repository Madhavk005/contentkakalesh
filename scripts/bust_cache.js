const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/data/projects.ts');
let content = fs.readFileSync(filePath, 'utf-8');

// Replace .mp4?v=X with .mp4?v=6
content = content.replace(/\.mp4(\?v=\d+)?/g, '.mp4?v=6');

fs.writeFileSync(filePath, content);
console.log('Updated cache-busting query strings to projects.ts (v=6)');
