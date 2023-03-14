const Router = require('express').Router
const {
    getAllContactinfo,
    getContactinfo,
    createContactinfo,
    updateContactinfo,
    deleteContactinfo
} = require('./contactinfoController')

const contactinfo = Router();

contactinfo.get('/', getAllContactinfo)
contactinfo.get('/:id', getContactinfo)
contactinfo.post('/', createContactinfo)
contactinfo.put('/:id', updateContactinfo)
contactinfo.delete('/:id', deleteContactinfo)

module.exports = contactinfo