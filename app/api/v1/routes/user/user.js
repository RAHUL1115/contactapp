const Router = require('express').Router
const {
    login,
    getAllUser,
    getUser,
    createUser,
    updateUser,
    deleteUser,
} = require('./controller/userController')

const user = Router();

user.post('/login', login)
user.get('/', getAllUser)
user.get('/:id', getUser)
user.post('/', createUser)
user.put('/:id', updateUser)
user.delete('/:id', deleteUser)

module.exports = user