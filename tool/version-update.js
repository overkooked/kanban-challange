const fs = require('fs-extra')

// Copy file
fs.copySync('app/data', 'build/data')

let dirList = fs.readdirSync('build', 'utf-8');
dirList = dirList.filter(x => x !== 'data')
const count = dirList.length
const path = `build/v${count}/index.html`;

let html = fs.readFileSync(path, 'utf-8');
html = html.replace('{{version}}', `V${count}`);
fs.writeFileSync(path, html);

