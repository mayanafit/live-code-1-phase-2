const {User, Password} = require(`../models`)
const {decode} = require(`../helpers/jwt`)

const authentication = (req, res, next) => {
    let access_token = req.headers.access_token
    let userData = decode(access_token)
    // console.log(userData)
    req.user = userData

    User.findByPk(userData.id) 
    .then(data => {
        if (data) {
            next()
        }
    })
    .catch(err => {
        next(err)
    })
}

const authorization = (req, res, next) => {
    let UserId = req.user.id
    let id = req.params.id
    let error = {
        name: `otherError`,
        statusCode: 403,
        message: `Sorry, you have no access to this.`
    }

    Password.findOne({where: {id, UserId}})
    .then(data => {
        if (data) {
            next()
        } else {
            throw error
        }
    })
    .catch(err => {
        next(err)
    })
}

module.exports = {authentication, authorization}