const Router = require('express').Router
const {
    getAllUser,
    getUser,
    createUser,
    login
} = require('./controller/userController')

const user = Router();

user.post('/login', login)
user.get('/', getAllUser)
user.get('/:id', getUser)
user.post('/', createUser)

module.exports = user