const contactInfoService = require('../service/contactinfoService')
const { BadRequest } = require('../../../../../utils/error')


async function getAllContactinfo(req, res, next) {
    try {
        let contactId = req.params.contactId
        let contactInfo = await contactInfoService.getAllContactInfo(contactId)
        res.status(200).json(contactInfo)
    } catch (error) {
        next(error);
    }
}

async function getContactinfo(req, res, next){
    try {
        let id = req.params.id
        let contactInfo = await contactInfoService.getContactInfo(id)
        res.status(200).json(contactInfo)
    } catch (error) {
        next(error);
    }
}

async function createContactinfo(req, res, next) {
    try {
        let contactId = req.params.contactId
        let data = req.body.data;
        let type = req.body.data;
        if (!data) throw new BadRequest('contact info data cannot be empty')
        if (!type) throw new BadRequest('contact info type cannot be empty')
        let serviceData = await contactInfoService.createContactInfo(contactId, data, type)
        console.log(serviceData);
        res.status(200).json({ "status": "Contactinfo created" })
    } catch (error) {
        next(error);
    }
}


async function updateContactinfo(req, res, next) {
    try {
        let id = req.params.id
        let contactId = req.params.contactId
        let data = req.body.data;
        let type = req.body.type;
        if (!Boolean(contactId || data || type)) throw new BadRequest('at least one perameter should be specified for update contact info');
        let serviceData = await contactInfoService.updateContactInfo(id, contactId, data, type)
        console.log(serviceData);
        res.status(200).json({ "status": "contactinfo updated" })
    } catch (error) {
        next(error);
    }
}

async function deleteContactinfo(req, res, next) {
    try {
        let id = req.params.id;
        let serviceData = await contactInfoService.deleteContactInfo(id);
        res.status(200).json({ "status": "contactinfo deleted"})
    } catch (error) {
        next(error);
    }
}


module.exports = {
    getAllContactinfo,
    getContactinfo,
    createContactinfo,
    updateContactinfo,
    deleteContactinfo,
}