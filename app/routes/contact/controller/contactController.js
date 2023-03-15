const contactService = require('../service/contactService')
const { BadRequest } = require('../../../error')

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

function createContact(req, res, next) {
    try {
        let userId = req.params.userId
        let name = req.body.name
        if (!name) throw new BadRequest('name cannot be empty')
        contactService.createUserContact(userId, name)
        res.status(200).json({ "status": "create Contacts" })   
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getAllContact,
    getContact,
    createContact,
}