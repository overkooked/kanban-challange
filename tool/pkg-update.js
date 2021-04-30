const fs = require('fs');

let dirList = fs.readdirSync('build', 'utf-8');
dirList = dirList.filter(x => x !== 'data')
const count = dirList.length + 1;
dirList.push(`v${count}`);
fs.writeFileSync('app/data/version.json', JSON.stringify(dirList));

const pkg = fs.readFileSync('package.json', 'utf-8');
const pkgX = JSON.parse(pkg);
const path = `build/v${count}/index.html`;
pkgX.main = path;
fs.writeFileSync('package.json', JSON.stringify(pkgX));



