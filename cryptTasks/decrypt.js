// command in node to run => node {path to file to run program} {path to file to save data} {password to enter program} {password to code plain text}
// node ./cryptTasks/encrypt.js ./data/test.txt mega 1234
const {hash, compare} = require('bcrypt');
const {readFile, writeFile} = require('fs').promises;
const {decryptText} = require('./codeToText')

const [, , filePathName, passwordToEnterProgram, passwordToCodeString] = process.argv;
const SALT = 'asadasdasdasf398y3hfkjn394fh';
const textToCode = 'Tekst do zaszyfrowania';
const hashToCheck = '$2b$10$33zq9B25NlmXjBLEyWtL4u15IWR4Qs/y1Qpg38UOyQR1cSzIdRtYm';

compare(passwordToEnterProgram, hashToCheck, async (err, res) => {
    if (res) {
        console.log('Dostęp do pliku!');
        console.log('Trzeba zapisać treść w pliku');
        const stringToDecrypt = JSON.parse(await readFile(filePathName, 'utf8'));
        const decrypted = await decryptText(stringToDecrypt.encrypted, passwordToCodeString, SALT, stringToDecrypt.iv);
        console.log(decrypted)
        await writeFile(filePathName, decrypted)
    } else {
        console.log('nie przepuszczę')
    }
})