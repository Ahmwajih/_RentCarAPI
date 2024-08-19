const morgan = require('morgan');
const fs = require('fs'); // File system module
const path = require('path');

const now = new Date();
const today = now.toISOString().split('T')[0];

// Ensure the logs directory exists
const logDirectory = path.join(__dirname, 'logs');
if (!fs.existsSync(logDirectory)) {
    fs.mkdirSync(logDirectory, { recursive: true });
}

module.exports = morgan('combined', {
    stream: fs.createWriteStream(path.join(logDirectory, `${today}.log`), { flags: 'a' })
});
