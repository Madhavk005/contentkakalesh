const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/data/projects.ts');
let content = fs.readFileSync(filePath, 'utf-8');

// A bit complex to parse TS array safely, but since we generated it cleanly, 
// let's do a simple regex extraction or just evaluate it if we strip "export const projects = ".
const jsonStr = content.replace('export const projects = ', '').replace(/;/g, '');

// Wait, the data has JSX in it: `name: <>#YehDilDeewana<wbr/>OnlyForJECRC</>` ? No, wait, in projects.ts I had `title: "Yeh Dil"`. 
// Let's just execute the file by transforming it to CommonJS or parse it manually.
