const User = require('../../view/user')
const Contact = require('../../view/contact')
const ContactInfo = require('../../view/contactinfo')

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

function createUser() {
    let user = new User('rahul',"123")
    user.create();
}

module.exports = {
    getAllUser,
    getUser,
    createUser
}