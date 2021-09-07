const {promisify} = require('util');
const scrypt = promisify(require('crypto').scrypt);
const randomBytes = promisify(require('crypto').randomBytes);
const {createCipheriv , createDecipheriv} = require('crypto');

async function encryptText(text, password, salt) {
    const algorithm = 'aes-192-cbc';
    const key = await scrypt(password, salt, 24);
    const iv = await randomBytes(16);

    const cipher = createCipheriv(algorithm, key, iv);
    let  encrypted = cipher.update(text, 'utf8','hex');
    encrypted += cipher.final('hex');
    return {
        encrypted,
        iv: iv.toString('hex')
    }
}

async function decryptText(text, password, salt, ivHex){
    const algorithm = 'aes-192-cbc';
    const key = await scrypt(password, salt, 24);
    const iv = Buffer.from(ivHex, 'hex');

    const decipher = createDecipheriv(algorithm,key,iv);
    let decrypted = decipher.update(text, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted
}

module.exports = {encryptText, decryptText};

// to jest wywołanie programu

const password = '12345678';
const SALT = 'asadasdasdasf398y3hfkjn394fh';
const textToCode = 'poklik';
(async () => {
    const encrypted = await encryptText(textToCode, password, SALT);
    console.log(encrypted)
    const decrypted = await decryptText('c4ad020cdfdedfc21dbab2acac444cdf',password,SALT, '233d6d41b6e0fb92aa8cc72d66312047');
    console.log(decrypted)
})()