const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const files = fs.readdirSync(publicDir).filter(f => f.endsWith('.mp4'));

const existingIds = ['yeh-dil.mp4', 'home-away.mp4'];
const newFiles = files.filter(f => !existingIds.includes(f));

let projectsData = `export const projects = [
  {
    id: "yeh-dil-jecrc",
    title: "Yeh Dil",
    role: "Direction & Production",
    year: "2026",
    category: "Instagram Reel",
    outcome: "1.6M+ Views",
    description: "A viral campus campaign blending emotional storytelling with high-retention digital strategy.",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop",
    video: "/yeh-dil.mp4",
    platforms: ["Instagram"],
    challenge: "Creating a highly shareable, emotional piece of content that resonates deeply with the student community.",
    insight: "Students connect best with authentic, music-driven narratives that feel like their own memories.",
    strategy: "A pure focus on visual storytelling, relying on pacing and trending audio mechanics.",
    production: {
      pre: "Storyboarding built entirely around the audio track pacing.",
      shoot: "Shot to capture a soft, nostalgic campus look.",
      post: "Fast-paced editorial cuts optimized for Instagram Reels retention graphs."
    },
    results: [
      { label: "Views", value: "1.6M+" },
      { label: "Likes", value: "12K+" },
      { label: "Shares", value: "400+" },
    ],
    learnings: "Emotional resonance is the ultimate algorithm hack."
  },
  {
    id: "home-away-from-home",
    title: "Home Away From Home",
    role: "Content Strategy & Production",
    year: "2025",
    category: "Documentary",
    outcome: "2M+ Views",
    description: "A raw, student-led narrative documenting the transition of finding belonging in an unfamiliar city.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop",
    video: "/home-away.mp4",
    platforms: ["Instagram", "YouTube"],
    challenge: "Connecting with Gen-Z audiences using authentic, non-corporate storytelling.",
    insight: "Students don't trust brochures; they trust real, unfiltered experiences.",
    strategy: "We built a content framework powered entirely by raw, day-in-the-life moments.",
    production: {
      pre: "Established a dedicated creator network.",
      shoot: "Shot entirely on minimal gear to maintain a native feel.",
      post: "Fast-turnaround edits optimized for high retention."
    },
    results: [
      { label: "Reach", value: "10M+" },
      { label: "Engagement", value: "15%" },
      { label: "Shares", value: "+40%" },
    ],
    learnings: "Authenticity scales faster than production value."
  },
`;

newFiles.forEach((file, index) => {
  const id = file.replace('.mp4', '');
  const title = id.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  
  projectsData += `  {
    id: "${id}",
    title: "${title}",
    role: "Creative Production",
    year: "2026",
    category: "Short Form Video",
    outcome: "High Engagement",
    description: "A fast-paced, visually driven narrative designed for maximum retention.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070&auto=format&fit=crop",
    video: "/${file}",
    platforms: ["Instagram", "YouTube"],
    challenge: "Capturing attention in the first 3 seconds.",
    insight: "Movement and music are the best hooks.",
    strategy: "Visual momentum over dialogue.",
    production: {
      pre: "Audio-first conceptualization.",
      shoot: "Dynamic camera movement.",
      post: "Beat-synced editorial cuts."
    },
    results: [
      { label: "Views", value: "1M+" },
      { label: "Likes", value: "10K+" },
    ],
    learnings: "Pacing is everything."
  },\n`;
});

projectsData += `];\n`;

fs.writeFileSync(path.join(__dirname, 'src/data/projects.ts'), projectsData);
console.log('Successfully updated projects.ts with ' + newFiles.length + ' new videos.');
