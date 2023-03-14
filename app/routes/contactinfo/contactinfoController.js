const contactInfoController = require('./contactinfoService')

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

function createContactinfo(req, res) {
    let contactId = req.params.contactId
    contactInfoController.createContactInfo(contactId)
    res.status(200).json({ "status": "create Contactinfo" })
}



module.exports = {
    getAllContactinfo,
    getContactinfo,
    createContactinfo,
}