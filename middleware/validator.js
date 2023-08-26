const { body, checkSchema, param, query, validationResult, check } = require('express-validator')
const { decrypt } = require('../helpers/encrypt')

// Start Register Validator
const register = () => {
    return [
        body('password').custom(async value => {
            if (value.length < 1 || decrypt(value).length < 8)
                throw new Error('Password must be more than 8 digits')
        }),
        body('email').isLength({ min: 11 }).withMessage('must min 11 digits')
    ]
}

const validate = (req, res, next) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
        return next()
    }

    const extractedError = []
    errors.array().map(err => {
        extractedError.push(`${err.path} ${err.msg.toLowerCase()}`)
    })

    return res.status(400).json({
        message: extractedError
    })
}

module.exports = {
    validate,
    register
}