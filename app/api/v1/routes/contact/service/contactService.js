const sequelize = require('../../../../../db/models').sequelize;
const Contact = require('../../../view/contact');

async function getAllUserContact(userId) {
    return await Contact.getAll(userId);
}

async function getUserContact(id) {
    return await Contact.get(id);
}

async function createUserContact(userId,name) {
    const t = await sequelize.transaction();
    try {
        let contact = new Contact(userId, name)
        let result = await contact.create();
        t.commit();
        return result;
    } catch (error) {
        t.rollback()
        throw error
    }
}

async function updateUserContact(id, userId, name) {
    const t = await sequelize.transaction();
    try {
        let contact = new Contact(userId, name)
        contact.setId(id);
        let result = await contact.update();
        t.commit();
        return result;
    } catch (error) {
        t.rollback()
        throw error
    }
}

async function deleteUserContact(id) {
    const t = await sequelize.transaction();
    try {
        let result = await Contact.delete(id);
        t.commit();
        return result;
    } catch (error) {
        t.rollback()
        throw error
    }
}

module.exports = {
    getAllUserContact,
    getUserContact,
    createUserContact,
    updateUserContact,
    deleteUserContact,
}