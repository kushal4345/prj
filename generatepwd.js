const crypto = require('crypto');
const jwtSecretKey = crypto.randomBytes(32).toString('hex'); // 256-bit key
console.log(jwtSecretKey);