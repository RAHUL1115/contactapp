const { BadRequest } = require('../../../error');
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

function createUser(req, res,next) {
    try {
        let username = req.body.username
        let password = req.body.password
        if (!username) throw new BadRequest('Username password cannot be empty')
        if (!password) throw new BadRequest('password cannot be empty')
        userService.createUser(username, password)
        res.status(200).json({ "status": "create users" })  
    } catch (error) {
        next(error)
    }
}

function login(req,res,next){
    try {
        let username = req.body.username
        let password = req.body.password
        if (!username) throw new BadRequest('Username password cannot be empty')
        if (!password) throw new BadRequest('password cannot be empty')
        let token = userService.login(username, password)
        res.cookie('auth', token)
        res.status(200).json({ "status": "login", token: token })  
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getAllUser,
    getUser,
    createUser,
    login
}