const userService = require('./userService')

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
    userService.createUser()
    res.status(200).json({ "status": "create users" })
}

module.exports = {
    getAllUser,
    getUser,
    createUser,
}