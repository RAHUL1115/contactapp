const Contact = require('../../view/contact')

function getAllUser() {
    return Contact.getAll();
}

function createUser() {
    let user = new Contact('rahul', "123")
    user.create();
}

module.exports = {
    getAllUser,
    createUser
}