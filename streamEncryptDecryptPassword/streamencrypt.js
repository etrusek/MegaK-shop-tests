const {createReadStream, createWriteStream} = require('fs');
const {pipeline} = require('stream').promises;
const {createGzip} = require('zlib');
const {createCipher, createDecipher} = require('crypto');
const {promisify} = require('util');
const scrypt = promisify(require('crypto').scrypt);

const [, , fileIn, fileOut, pass] = process.argv;

(async () => {
    const SALT = '&Z>}:&#:398y3hfkjn394fh@#$%GS&G>$:^>V"@DVP^"()_+"C:>KF';
    const key = await scrypt(pass, SALT, 24);
    await pipeline(
        createReadStream(fileIn),
        createCipher('aes-192-cbc', key),
        createWriteStream(fileOut)
    );
})()
