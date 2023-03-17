const db = require('../../../db/models');

const _ = require('lodash');
const { v4: uuidv4 } = require('uuid');

class ContactInfo {
    static contactinfos = [
        {
            "contactId": "f7ee7780-30b3-48a0-8479-df52f24d7719",
            "data": "917021091055",
            "type": "number",
            "id": "12e93c55-0248-47a7-8056-deac3d729a4a"
        }
    ]

    constructor(contactId,data,type) {
        this.contactId = contactId
        this.data = data
        this.type = type
    }

    createId() {
        this.id = uuidv4()
    }

    setId(id) {
        this.id = id;
    }

    async update(t) {
        return await db.ContactInfo.update(this, { where: { id: this.id }, transaction: t });
    }

    async create(t) {
        this.createId()
        return await db.ContactInfo.create(this, { transaction: t })
    }

    static async getAll() {
        let contactInfos = await db.ContactInfo.findAll()
        return contactInfos
    }

    static async get(id) {
        let contactInfo = await db.ContactInfo.findByPk(id)
        return contactInfo.toJSON();
    }

    static async delete(t,id){
        return await db.ContactInfo.destroy({where: {id: id}, transaction : t})
    }
}

module.exports = ContactInfo;