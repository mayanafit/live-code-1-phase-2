const {Password} = require(`../models`)

class PasswordController {

    static showAll(req, res, next) {
        let UserId = req.user.id
        // console.log(UserId)
        Password.findAll({where: {UserId}})
        .then(data => {
            let results = []
            data.forEach(element => {
                results.push(element.dataValues)
            });
            res.status(200).json(results)
        })
        .catch(err => {
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
            res.status(201).json(newPassword)
        })
        .catch(err => {
            next(err)
        })
    }

    static delete(req, res,next) {
        let id = req.params.id
        
        Password.destroy({where: {id}})
        .then(data => {
            res.status(200).json({message: `Delete password successful!`})
        })
        .catch(err => {
            next(err)
        })
    }
}

module.exports = PasswordController