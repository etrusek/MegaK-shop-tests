const {basename, dirname, extname, normalize, resolve} = require('path');

function safeJoin(base, target) {
    const targetPath = '.' + normalize('/' + target);
    return resolve(base, targetPath);
}
const enteredValue = process.argv[2];
const safePath = safeJoin(__dirname, enteredValue);
const parentDirName = dirname(safePath);
const extensionName = extname(safePath);
const fileName = basename(safePath);

console.log('Full path: ', safePath);
console.log('Dir name: ', parentDirName);
console.log('File name: ', fileName);
console.log('Extension: ', extensionName);