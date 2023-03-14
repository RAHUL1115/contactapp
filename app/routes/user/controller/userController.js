const userService = require('../service/userService')

function getAllUser(req, res) {
    let users = userService.getAllUser();
    res.status(200).json(users)
}

function getUser(req, res) {
    let id = req.params.id
    let user = userService.getUser(id);
    res.status(200).json(user)
}

function createUser(req, res) {
    let username = req.body.username
    let password = req.body.password
    if (!username) throw new Error('Username password cannot be empty')
    if (!password) throw new Error('password cannot be empty')
    userService.createUser(username,password)
    res.status(200).json({ "status": "create users" })
}

module.exports = {
    getAllUser,
    getUser,
    createUser,
}