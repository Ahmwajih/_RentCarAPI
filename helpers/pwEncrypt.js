const crypto = require('node:crypto'),
    keyCode = process.env.KEY_CODE,
    loopCount = 10_000,
    charCount = 32,
    encType = 'sha512'

module.exports = (password)=>{
    console.log(password)
    return crypto.pbkdf2Sync(password, keyCode, loopCount, charCount, encType).toString('hex')
}