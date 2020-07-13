
const errorHandler = (err, req, res, next) => {
    let statusCode = 500
    let message = `Internal Server Error. ${err}`

    if (err.name === `SequelizeValidationError`) {
        let errors = []
        err.errors.forEach(element => {
            errors.push(element.message)     
        });

        statusCode = 400
        message = errors
    } else if (err.name === `SequelizeUniqueConstraintError`) {
        statusCode = 400
        message = `Email already registered. Please use another email.`
    } else if (err.name === `otherError`) {
        statusCode = err.statusCode
        message = err.message
    } else if (err.name === `JsonWebTokenError`) {
        statusCode = 401
        message = `Please login to your account!`
    }

    return res.status(statusCode).json({message})
}

module.exports = errorHandler