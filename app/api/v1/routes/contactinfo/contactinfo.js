const Router = require('express').Router
const Jwt = require('../../middleware/jwt');
const {
    getAllContactinfo,
    getContactinfo,
    createContactinfo,
    updateContactinfo,
    deleteContactinfo,
} = require('./controller/contactinfoController')

const contactinfo = Router({ mergeParams: true });

contactinfo.get('/', Jwt.authenticateCookie, getAllContactinfo)
contactinfo.get('/:id', Jwt.authenticateCookie, getContactinfo)
contactinfo.post('/', Jwt.authenticateCookie, createContactinfo)
contactinfo.put('/:id', Jwt.authenticateCookie, updateContactinfo)
contactinfo.delete('/:id', Jwt.authenticateCookie, deleteContactinfo)

module.exports = contactinfo