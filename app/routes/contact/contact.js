const Router = require('express').Router
const Jwt = require('../../middleware/jwt');
const {
    getAllContact,
    getContact,
    createContact,
} = require('./controller/contactController')

const contact = Router({ mergeParams: true });

contact.get('/', Jwt.authenticateCookie, getAllContact)
contact.get('/:id', Jwt.authenticateCookie, getContact)
contact.post('/', Jwt.authenticateCookie, createContact)

module.exports = contact