const sequelize = require('../../../../../db/models').sequelize;
const ContactInfo = require('../../../view/contactinfo')

async function getAllContactInfo(contactId) {
    let result = ContactInfo.getAll(contactId);
    return result;
}

async function getContactInfo(id) {
    let result = await ContactInfo.get(id);
    return result;
}

async function createContactInfo(id, contactId, data, type) {
    const t = await sequelize.transaction();
    try {
        let contactInfo = new ContactInfo(contactId, data, type)
        let result = await contactInfo.create(t);
        t.commit();
        return result;
    } catch (error) {
        t.rollback();
        throw error;
    }
}

async function updateContactInfo(id, contactId, data, type) {
    const t = await sequelize.transaction();
    try {
        let contactInfo = new ContactInfo(contactId, data, type)
        contactInfo.setId(id);
        let result = await contactInfo.update(t);
        t.commit();
        return result;
    } catch (error) {
        t.rollback();
        throw error;
    }
}

async function deleteContactInfo(id) {
    const t = await db.sequelize.transaction();
    try {
        let result = await ContactInfo.delete(t,id);
        t.commit();
        return result
    } catch (error) {
        t.rollback();
        throw error        
    }
}

module.exports = {
    getAllContactInfo,
    getContactInfo,
    createContactInfo,
    updateContactInfo,
    deleteContactInfo,
}