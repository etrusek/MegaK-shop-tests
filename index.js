// task2
const {readdir, stat} = require('fs').promises;
const arrOfFiles = []
const path = './Projekty';

const listingFiles = async (path, tree) => {
    const files = await readdir(path);
    // console.log(files)
    for (const file of files) {
        const isFolder = (await stat(`${path}/${file}`)).isDirectory();
        console.log(tree, file, ' - ', isFolder ? "Folder" : "Plik");
        if (isFolder) {
            await listingFiles(`${path}/${file}`, `${tree}--`)
        }
    }
}
listingFiles(path, '').then(a => arrOfFiles.push(a));
console.log(arrOfFiles, 'koniec');


//task1

// const {writeFile, access, readFile, readdir, mkdir, stat} = require('fs').promises;
// const {constants} = require('fs');
// const FILE_CONTENT = [1, 2, 7, 20, 56, 22];
//
// (async () => {
//     try {
//         await access('./data/input1.json', constants.F_OK)
//     } catch (e) {
//         await writeFile('./data/input1.json', JSON.stringify(FILE_CONTENT), {flag: 'a'});  // tworzy plik i zapisuje w nim tablicę
//     }
//     const fileContent = JSON.parse( await readFile('./data/input1.json', 'utf8'));
//     let counter = 0
//     fileContent.forEach(num => counter += num);
//     const sumToSave = counter.toString();
//     await writeFile('./data/sum.txt', sumToSave);
//     console.log(counter);
// })()




