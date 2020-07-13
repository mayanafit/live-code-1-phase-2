const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET

const encode = (data) => {
    return jwt.sign(data, secretKey)
}

const decode = (token) => {
    return jwt.verify(token, secretKey)
}

module.exports = {encode, decode}