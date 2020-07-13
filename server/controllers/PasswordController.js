const {Password} = require(`../models`)

class PasswordController {

    static show(req, res, next) {
        // let UserId = req.user.id
        // console.log(UserId)
        Password.findAll()
        .then(data => {
            let results = []
            data.forEach(element => {
                results.push(element.dataValues)
            });
            res.status(200).json(results)
        })
        .cacth(err => {
            next()
        })
    }

    static add(req, res, next) {
        let UserId = req.user.id
        let newPassword = {
            name: req.body.name,
            url: req.body.url,
            password: req.body.password,
            username: req.body.username,
            UserId: UserId
        }

        Password.create(newPassword)
        .then(data => {
            res.status(201).json(data)
        })
        .catch(err => {
            next(err)
        })
    }

    static delete(req, res,next) {

    }
}

module.exports = PasswordController