const { BadRequest } = require('../../../error');
const Contact = require('../../../view/contact')
const ContactInfo = require('../../../view/contactinfo')

function getAllContactInfo(contactId) {
    return ContactInfo.getAll(contactId);
}

function getContactInfo(id) {
    return ContactInfo.get(id);
}

function createContactInfo(contactId,number) {
    let contact = Contact.get(contactId)
    if (contact?.id != contactId) throw new BadRequest("Contact id not in system")
    let contactInfo = new ContactInfo(contactId, number)
    contactInfo.create();
}

module.exports = {
    getAllContactInfo,
    getContactInfo,
    createContactInfo
}