//s2w4d4 Stream
//nowsza wersja streamów od 16 Node.js
// const {createReadStream, createWriteStream} = require('fs');
// const {pipeline} = require('stream').promises;
//
//
// (async () => {
//     await pipeline(
//         createReadStream('s2w4d12.js'),
//         createWriteStream('s2w4d12aaaaa.js')
//     )
// })()

//starsza wersja streamów przed 16 Node.js
// const {createReadStream, createWriteStream} = require('fs');
// const r = createReadStream('s2w4d12.js');
// const w = createWriteStream('s2w4d12aaaaa.js');
// r.pipe(w);
// r.on('end', ()=> console.log('Ready!'));

//Najstarsza wersja streamów
// const {createReadStream, createWriteStream} = require('fs');
// const r = createReadStream('s2w4d12.js');
// const w = createWriteStream('s2w4d12aaaaa.js');
//
// r.on('data', data=>w.write(data));
// r.on('end', ()=>{
//     w.close();
//     console.log('Ready!');
// })

// s2w4d3 Buffer
// console.log(Buffer)

//s2w4d1t1
// const {hash, compare} = require('bcrypt');
// const hashToCheck = '$2b$10$gi5ajJoVXA/lOO9jU7suZuQ4D/hrlBhHtxaRxJpy.mXc0gHKowx7q';
// const userEnterPasword = process.argv[2];
//
// compare(userEnterPasword, hashToCheck,(err,res)=>{
//     if (res){
//         console.log('Logged in!')
//     } else{
//         console.log('nie przepuszczę')
//     }
// })


//s2d3d5
// const {hash, compare} = require('bcrypt');
// hash('text do shashowania', 10, (err,hash)=>{
//     console.log(hash);
//     compare('text do shashowania', hash,(err,res)=>{
//         if (res){
//             console.log('działa zapraszam')
//         } else{
//             console.log('nie przepuszczę')
//         }
//     })
// })

// const {pbkdf2} = require('crypto');
// const salt = 'OLHIJBGaijubaKIJ*&976$%YH:>';
// pbkdf2('Tekst do zhashowania', salt, 100000,64,'sha512',(err,derivedKey)=>{
//     if (err) throw err;
//     console.log(derivedKey.toString('hex'))
// })
// const {createHmac} = require('crypto');
// const salt = 'OLHIJBGaijubaKIJ*&976$%YH:>';
// const hash = createHmac('sha512', salt)
//     .update('Tekst do zhashowania')
//     .digest('hex');
// console.log(hash);

//s2w3d3
// const {encryptText, decryptText} = require('./cipher')
//
// const SALT = 'asadasdasdasf398y3hfkjn394fh';
//
// (async () => {
//     const encrypted = await encryptText('poklik', '12345678', SALT);
//     console.log(encrypted)
//     const decrypted = await decryptText('c4ad020cdfdedfc21dbab2acac444cdf','12345678',SALT, '233d6d41b6e0fb92aa8cc72d66312047');
//     console.log(decrypted)
// })()

//s2w3d3t2
// const {exec} = require('child_process');
// const {promisify} = require('util');
// const execProm = promisify(exec)
// const path = process.argv[2];
// (async () => {
//     const dirMake = await execProm('dir', {
//         cwd: 'C:\\',
//     })
//     console.log(dirMake)
// })()
// exec('dir', {
//     cwd: 'C:\\'
// }, function(error, stdout, stderr) {
//     console.log('aaa',stdout)
// });

//s2w3d3t1
// const {exec} = require('child_process');
// const arg = process.argv[2];
// let open = null;
// if (arg === 'Kalkulator'){
//    open = 'calc.exe';
// } else if (arg === 'Paint'){
//    open = 'mspaint.exe';
// }
// exec(open);


// s2w3d1t1
// const {exec} = require('child_process');
// exec('node test.js', (err, stdout, stderr) => {
//     console.log('Program has finished!', stdout);
//     console.log('Error stderr: ', stderr);
//
// });


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