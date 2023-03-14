const userService = require('./userService')

function getAllUser(req, res) {
    let users = userService.getAllUser();
    res.status(200).json(users)
}

function getUser(req, res) {
    res.status(200).json({ "status": "get user" })
}

function createUser(req, res) {
    userService.createUser()
    res.status(200).json({ "status": "create users" })
}

function updateUser(req, res) {
    res.status(200).json({ "status": "update users" })
}

function deleteUser(req, res) {
    res.status(200).json({ "status": "delete users" })
}

module.exports = {
    getAllUser,
    getUser,
    createUser,
    updateUser,
    deleteUser
}