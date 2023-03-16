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
        res.status(200).json({ "status": "create Contactinfo", data: serviceData })
    } catch (error) {
        next(error);
    }
}



module.exports = {
    getAllContactinfo,
    getContactinfo,
    createContactinfo,
}