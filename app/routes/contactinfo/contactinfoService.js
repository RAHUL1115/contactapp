const Contact = require('../../view/contact')
const ContactInfo = require('../../view/contactinfo')

function getAllContactInfo(contactId) {
    return ContactInfo.getAll(contactId);
}

function getContactInfo(id) {
    return ContactInfo.get(id);
}

function createContactInfo(contactId) {
    let contact = Contact.get(contactId)
    if (contact?.id != contactId) throw new Error("Contact id not in system")
    let contactInfo = new ContactInfo(contactId, "917021091055")
    contactInfo.create();
}

module.exports = {
    getAllContactInfo,
    getContactInfo,
    createContactInfo
}