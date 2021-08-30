// s2w3d1t1
const {exec} = require('child_process');
exec('node test.js', (err, stdout, stderr) => {
    console.log('Program has finished!', stdout);
    console.log('Error stderr: ', stderr);

});


//s2w2d4/5lesson
// const fetch = require('node-fetch');
// const {writeFile} = require('fs').promises;
// const {normalize, resolve} = require('path');
// const cityName = process.argv[2];
//
//
// function safeJoin(base, target) {
//     const targetPath = '.' + normalize('/' + target)
//     return resolve(base, targetPath)
// }
//
// const getDataFileName = city => safeJoin(`./data/`,`${city}.txt`) ;
//
// const processWeatherData = datas => {
//     console.log(datas.find(data => data.stacja === cityName))
// }
//
// (async () => {
//     const jsonDataFromFetch = await (await fetch(`https://danepubliczne.imgw.pl/api/data/synop`)).json();
//     processWeatherData(jsonDataFromFetch);
// })()
// fetch(`https://danepubliczne.imgw.pl/api/data/synop`)
//     .then(p => p.json())
//     .then(processWeatherData)


//task s2w2d3t12
// const {watch} = require('chokidar');
// const {relative, resolve, join} = require("path");
// const {readFile} = require('fs').promises;
//
// const userPathToWatch = process.argv[2];
//
// const checkIsPathValid = newFile => {
//     const relativePath = relative(__dirname, newFile);
//         if (newFile.includes('~')) {
//         return console.log('zawiera ~ Nie wychodzimy z katalogu głównego')
//     } else if (relativePath.includes('..')) {
//         return console.log('nie można wyjśc z katalogu głównego')
//     } else {
//         const pathToWatch = join(relativePath, '/**/*.js')
//         watch(pathToWatch, {ignoreInitial: true, awaitWriteFinish: true}).on('all', async (event, path) => {
//             console.log(event, path)
//             const fileContent = await readFile(path, 'utf8');
//             console.log(fileContent)
//         });
//     }
//
// }
//
// checkIsPathValid(userPathToWatch)
// const pathToWatch = './data/**/*.js'