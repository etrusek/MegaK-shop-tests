const {createReadStream, createWriteStream} = require('fs');
const {pipeline} = require('stream').promises;
const {createDecipher} = require('crypto');
const [, , fileIn, fileOut, pass] = process.argv;
const {promisify} = require('util');
const scrypt = promisify(require('crypto').scrypt);
(async () => {
    const SALT = '&Z>}:&#:398y3hfkjn394fh@#$%GS&G>$:^>V"@DVP^"()_+"C:>KF';
    const key = await scrypt(pass, SALT, 24);

    await pipeline(
        createReadStream(fileIn),
        createDecipher('aes-192-cbc', key),
        createWriteStream(fileOut)
    );
})()