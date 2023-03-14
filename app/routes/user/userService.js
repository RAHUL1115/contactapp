const User = require('../../view/user')

function getAllUser() {
    return User.getAll();
}

function createUser() {
    let user = new User('rahul',"123")
    user.create();
}

module.exports = {
    getAllUser,
    createUser
}