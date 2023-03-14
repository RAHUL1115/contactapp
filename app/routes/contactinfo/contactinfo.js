const Router = require('express').Router
const {
    getAllContactinfo,
    getContactinfo,
    createContactinfo,
} = require('./controller/contactinfoController')

const contactinfo = Router({ mergeParams: true });

contactinfo.get('/', getAllContactinfo)
contactinfo.get('/:id', getContactinfo)
contactinfo.post('/', createContactinfo)

module.exports = contactinfo