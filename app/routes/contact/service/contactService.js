const User = require('../../../view/user')
const Contact = require('../../../view/contact')

function getAllUserContact(userId) {
    return Contact.getAll(userId);
}

function getUserContact(id) {
    return Contact.get(id);
}

function createUserContact(userId,name) {
    let user = User.get(userId)
    if (user?.id != userId) throw new Error("User not in system")
    let contact = new Contact(userId, name)
    contact.create();
}

module.exports = {
    getAllUserContact,
    getUserContact,
    createUserContact
}