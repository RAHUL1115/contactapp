const contactService = require('./contactService')

function getAllContact(req, res) {
    let userId = req.params.userId
    let userContacts = contactService.getAllUserContact(userId)
    res.status(200).json(userContacts)
}

function getContact(req, res) {
    let id = req.params.id
    let userContacts = contactService.getUserContact(id)
    res.status(200).json(userContacts)
}

function createContact(req, res) {
    let userId = req.params.userId
    contactService.createUserContact(userId)
    res.status(200).json({ "status": "create Contacts" })
}

module.exports = {
    getAllContact,
    getContact,
    createContact,
}