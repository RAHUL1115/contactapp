const User = require('../../../view/user')
const Contact = require('../../../view/contact')
const ContactInfo = require('../../../view/contactinfo');
const { BadRequest, UnauthorizedRequest } = require('../../../error');
const Jwt = require('../../../middleware/jwt')

function getAllUser() {
    return User.getAll();
}

function getUser(id) {
    let user = User.get(id);

    // this is to make nested data
    let userContacts = Contact.getAll(id)
    userContacts.map(userContect=>{
        let contactInfo = ContactInfo.getAll(userContect.id)
        userContect.info = contactInfo
        return contactInfo
    });
    user.contact = userContacts;

    return user
}

function createUser(username,password) {
    let existingUser = User.getByUserName(username);
    if (existingUser) {
        throw new BadRequest('User already exists');
    }
    let user = new User(username, password)
    user.create();
}

function login(username, password) {
    let existingUser = User.getByUserName(username);
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