const contactInfoController = require('../service/contactinfoService')
const { BadRequest } = require('../../../error')


function getAllContactinfo(req, res) {
    let contactId = req.params.contactId
    let contactInfo = contactInfoController.getAllContactInfo(contactId)
    res.status(200).json(contactInfo)
}

function getContactinfo(req, res){
    let id = req.params.id
    let contactInfo = contactInfoController.getContactInfo(id)
    res.status(200).json(contactInfo)
}

function createContactinfo(req, res, next) {
    try {
        let contactId = req.params.contactId
        let number = req.body.number;
        if (!number) throw new BadRequest('number cannot be empty')
        contactInfoController.createContactInfo(contactId, number)
        res.status(200).json({ "status": "create Contactinfo" })
    } catch (error) {
        next(error)
    }
}



module.exports = {
    getAllContactinfo,
    getContactinfo,
    createContactinfo,
}