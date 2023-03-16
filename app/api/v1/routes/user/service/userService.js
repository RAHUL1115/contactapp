const User = require('../../../view/user')
const Contact = require('../../../view/contact')
const ContactInfo = require('../../../view/contactinfo');
const { BadRequest, UnauthorizedRequest } = require('../../../../../utils/error');
const Jwt = require('../../../middleware/jwt')

async function getAllUser() {
    let data = await User.getAll();
    return data
}

async function getUser(id) {
    let user = await User.get(id);
    return user
}

async function createUser(username,password) {
    let existingUser = await User.getByUserName(username);
    if (existingUser) {
        throw new BadRequest('User already exists');
    }
    let user = new User(username, password)
    user.create();
}

async function login(username, password) {
    let existingUser = await User.getByUserName(username);
    if (!existingUser) {
        throw new UnauthorizedRequest('User dose not exists');
    }
    
    if (existingUser.username == username && existingUser.password == password){
        let jwt = new Jwt(existingUser.username)
        return jwt.generateToken();
    }

    throw new UnauthorizedRequest('Invalid credentials');
}



module.exports = {
    getAllUser,
    getUser,
    createUser,
    login
}