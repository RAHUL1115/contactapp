const Router = require('express').Router
const {
    getAllContact,
    getContact,
    createContact,
} = require('./contactController')

const contact = Router({ mergeParams: true });

contact.get('/', getAllContact)
contact.get('/:id', getContact)
contact.post('/', createContact)

module.exports = contact