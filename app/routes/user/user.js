const Router = require('express').Router
const {
    getAllUser,
    getUser,
    createUser,
    login
} = require('./controller/userController')

const user = Router();

user.get('/', getAllUser)
user.get('/:id', getUser)
user.post('/', createUser)
user.post('/login', login)

module.exports = user