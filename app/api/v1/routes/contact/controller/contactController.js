const contactService = require('../service/contactService')
const { BadRequest } = require('../../../../../utils/error')

async function getAllContact(req, res, next) {
    try {
        let userId = req.params.userId
        let userContacts = await contactService.getAllUserContact(userId)
        res.status(200).json(userContacts)
    } catch (error) {
        next(error)   
    }
}

async function getContact(req, res) {
    try {
        let id = req.params.id
        let userContacts = await contactService.getUserContact(id)
        res.status(200).json(userContacts)
    } catch (error) {
        next(error)
    }
}

async function createContact(req, res, next) {
    try {
        let userId = req.params.userId
        let name = req.body.name
        if (!name) throw new BadRequest('name cannot be empty')
        await contactService.createUserContact(userId, name)
        res.status(200).json({ "status": "contact created" })   
    } catch (error) {
        next(error)
    }
}

async function updateContact(req, res, next) {
    try {
        let id = req.params.id
        let userId = req.params.userId
        let name = req.body.name
        if (!name) throw new BadRequest('name cannot be empty')
        await contactService.updateUserContact(id, userId, name)
        res.status(200).json({ "status": "contact upadted" })
    } catch (error) {
        next(error)
    }
}

async function deleteContact(req, res, next) {
    try {
        let id = req.params.id
        if (!id) throw new BadRequest('name cannot be empty')
        await contactService.deleteUserContact(id)
        res.status(200).json({ "status": "deleted" })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getAllContact,
    getContact,
    createContact,
    updateContact,
    deleteContact,
}