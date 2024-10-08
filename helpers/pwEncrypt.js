const crypto = require('node:crypto');
require('dotenv').config();
const keyCode = process.env.KEY_CODE;
const loopCount = 10_000;
const charCount = 32;
const encType = 'sha512';

module.exports = (password) => {
    return crypto.pbkdf2Sync(password, keyCode, loopCount, charCount, encType).toString('hex');
};