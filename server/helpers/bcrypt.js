const bcrypt = require('bcrypt')
const saltRounds = 10

const hashPass = (password) => {
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);

    return hash
}

const comparePass = (password, hash) => {
    return bcrypt.compareSync(password, hash)
}

module.exports = {hashPass, comparePass}