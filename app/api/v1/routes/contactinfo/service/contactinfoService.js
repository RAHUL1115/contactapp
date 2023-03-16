const { BadRequest } = require('../../../../../utils/error');
const Contact = require('../../../view/contact')
const ContactInfo = require('../../../view/contactinfo')

async function getAllContactInfo(contactId) {
    return await ContactInfo.getAll(contactId);
}

async function getContactInfo(id) {
    return await ContactInfo.get(id);
}

async function createContactInfo(contactId, data, type) {
    let contact = await Contact.get(contactId)
    if (contact?.id != contactId) throw new BadRequest("Contact id not in system")
    let contactInfo = new ContactInfo(contactId, data, type)
    return await contactInfo.create();
}

module.exports = {
    getAllContactInfo,
    getContactInfo,
    createContactInfo
}