const User = require('../../../view/user')
const Contact = require('../../../view/contact');
const { BadRequest } = require('../../../../../utils/error');

async function getAllUserContact(userId) {
    return await Contact.getAll(userId);
}

async function getUserContact(id) {
    return await Contact.get(id);
}

async function createUserContact(userId,name) {
    let user = await User.get(userId)
    if (user?.id != userId) throw new BadRequest("User not in system")
    let contact = new Contact(userId, name)
    await contact.create();
}

module.exports = {
    getAllUserContact,
    getUserContact,
    createUserContact
}