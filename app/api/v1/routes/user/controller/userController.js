const { BadRequest } = require('../../../../../utils/error');
const userService = require('../service/userService')
const Jwt = require('../../../middleware/jwt')

async function getAllUser(req, res, next) {
    try {
        let users = await userService.getAllUser();
        res.status(200).json(users)
    } catch (error) {
        next(error);
    }
}

async function getUser(req, res, next) {
    try {
        let id = req.params.id
        let user = await userService.getUser(id);
        res.status(200).json(user)
    } catch (error) {
        next(error);
    }
}

async function login(req, res, next) {
    try {
        let username = req.body.username
        let password = req.body.password
        if (!username) throw new BadRequest('Username password cannot be empty')
        if (!password) throw new BadRequest('password cannot be empty')
        await userService.login(username, password)
        let jwt = new Jwt(existingUser.username)
        let token = jwt.generateToken();
        res.cookie('auth', token)
        res.status(200).json({ "status": "success" })
    } catch (error) {
        next(error)
    }
}

async function createUser(req, res,next) {
    try {
        let username = req.body.username
        let password = req.body.password
        if (!username) throw new BadRequest('Username password cannot be empty')
        if (!password) throw new BadRequest('password cannot be empty')
        let serviceResponse = await userService.createUser(username, password)
        res.status(200).json(serviceResponse)  
    } catch (error) {
        next(error)
    }
}

async function updateUser(req, res, next) {
    try {
        let id = req.params.id;
        let username = req.body.username //false
        let password = req.body.password //ture
        if (!Boolean(username || password)) throw new BadRequest('At least one update perameters needs to be provided')
        let serviceResponse = await userService.updateUser(id , username, password)
        res.status(200).json(serviceResponse)
    } catch (error) {
        next(error)
    }
}

async function deleteUser(req, res, next) {
    try {
        let id = req.params.id
        if (!id) throw new BadRequest('User id cannot be empty')
        let serviceResponse = await userService.deleteUser(id)
        res.status(200).json(serviceResponse)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    login,
    getAllUser,
    getUser,
    createUser,
    updateUser,
    deleteUser,
}