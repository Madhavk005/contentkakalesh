const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/data/projects.ts');
let content = fs.readFileSync(filePath, 'utf-8');

const targets = [
  "welcome-home-jecrcians.mp4",
  "wednesday-just-got-legendary.mp4",
  "the-space-built-for-storytellers.mp4",
  "once-a-jecrcian-always-a-jecrcian.mp4",
  "main-tera-tu-meri....mp4",
  "b-praak.mp4",
  "day-1-done.mp4",
  "jecrc-meets-baby-john.mp4"
];

// Add rotate90: true to these specific videos
targets.forEach(target => {
  // Regex to match the video line and append rotate90: true
  // Example: video: "/welcome-home-jecrcians.mp4?v=5",
  const regex = new RegExp(`(video:\\s*"/${target.replace(/\./g, '\\.')}\\?v=\\d+",)`, 'g');
  content = content.replace(regex, `$1\n    cssRotate: true,`);
});

fs.writeFileSync(filePath, content);
console.log('Added cssRotate: true to targeted videos.');
