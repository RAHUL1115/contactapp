const Router = require('express').Router
const {
    getAllContact,
    getContact,
    createContact,
    updateContact,
    deleteContact
} = require('./contactController')

const contact = Router({ mergeParams: true });

contact.get('/', getAllContact)
contact.get('/:id', getContact)
contact.post('/', createContact)
contact.put('/:id', updateContact)
contact.delete('/:id', deleteContact)

module.exports = contact