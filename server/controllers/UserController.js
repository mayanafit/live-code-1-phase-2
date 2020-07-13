const {User} = require(`../models`)
const {encode} = require(`../helpers/jwt`)
const {comparePass} = require(`../helpers/bcrypt`)

class UserController {

    static register(req, res, next) {
        let newUser = User.generateForm(req.body)

        User.create(newUser)
        .then(data => {
            let user = {
                id: data.id,
                email: data.email
            }
            res.status(201).json(user)
        })
        .catch(err => {
            next(err)
        })
    }

    static login(req, res, next) {
        let user = User.generateForm(req.body)
        let error = {
            name: `otherError`,
            statusCode: 400,
            message: `Invalid Email or Password! Please try again.`
        }

        User.findOne({where: {email: user.email}})
        .then(data => {
            console.log(data)
            if (!data) {
                throw error
            } else {
                if (comparePass(user.password, data.password)) {
                    let access_token = encode({
                        id: data.id,
                        email: data.email
                    })
                    res.status(200).json({access_token})
                } else {
                    throw error
                }
            }
        })
        .catch(err => {
            next(err)
        })
    }

}

module.exports = UserController