const Router = require('express').Router
const {
    getAllUser,
    getUser,
    createUser,
    updateUser,
    deleteUser
} = require('./userController')

const user = Router();

user.get('/', getAllUser)
user.get('/:id', getUser)
user.post('/', createUser)

module.exports = user