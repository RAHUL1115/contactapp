const { BadRequest } = require('../../../../../utils/error');
const userService = require('../service/userService')

async function getAllUser(req, res) {
    let users = await userService.getAllUser();
    res.status(200).json(users)
}

async function getUser(req, res) {
    let id = req.params.id
    let user = await userService.getUser(id);
    res.status(200).json(user)
}

async function createUser(req, res,next) {
    try {
        let username = req.body.username
        let password = req.body.password
        if (!username) throw new BadRequest('Username password cannot be empty')
        if (!password) throw new BadRequest('password cannot be empty')
        await userService.createUser(username, password)
        res.status(200).json({ "status": "create users" })  
    } catch (error) {
        next(error)
    }
}

async function login(req,res,next){
    try {
        let username = req.body.username
        let password = req.body.password
        if (!username) throw new BadRequest('Username password cannot be empty')
        if (!password) throw new BadRequest('password cannot be empty')
        let token = await userService.login(username, password)
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