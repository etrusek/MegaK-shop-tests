const {promisify} = require('util');
const scrypt = promisify(require('crypto').scrypt);
const randomBytes = promisify(require('crypto').randomBytes);
const {createCipheriv, createDecipheriv} = require('crypto');

async function encryptText(text, password, salt) {
    const algorithm = 'aes-192-cbc';
    const key = await scrypt(password, salt, 24);
    const iv = await randomBytes(16);

    const cipher = createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return {
        encrypted,
        iv: iv.toString('hex')
    }
}

module.exports = encryptText