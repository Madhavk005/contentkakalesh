const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/data/projects.ts');
let content = fs.readFileSync(filePath, 'utf-8');

// Simple regex to extract array content:
const arrayMatch = content.match(/export const projects = \[([\s\S]*?)\];/);

if (arrayMatch) {
  let arrayContent = arrayMatch[1];
  
  // Split into individual objects. This relies on how the file is formatted.
  // Assuming each object starts with `{` and ends with `  },`
  const objectStrings = arrayContent.split(/  },\n/);
  
  const projects = objectStrings.map(str => {
    let cleanStr = str.trim();
    if (!cleanStr.endsWith('}')) {
      cleanStr += '\n  }';
    }
    // Find ID
    const idMatch = cleanStr.match(/id:\s*"([^"]+)"/);
    const id = idMatch ? idMatch[1] : null;
    return { id, content: cleanStr };
  }).filter(p => p.id);

  const order = [
    "this-is-jecrc-ep-0",
    "yeh-dil-jecrc",
    "aakhiri-chai",
    "home-away-from-home",
    "the-hype-is-real"
  ];

  const orderedProjects = [];
  order.forEach(id => {
    const p = projects.find(x => x.id === id);
    if (p) orderedProjects.push(p);
  });

  const rest = projects.filter(x => !order.includes(x.id));
  
  const all = [...orderedProjects, ...rest];
  
  const newFileContent = `export const projects = [\n  ${all.map(x => x.content).join(',\n  ')}\n];\n`;
  fs.writeFileSync(filePath, newFileContent);
  console.log("Reordered!");
}
