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

    async create() {
        this.createId()
        return await db.ContactInfo.create(this)
    }

    static async getAll(contactId) {
        let contactInfos = await db.ContactInfo.findAll()
        return contactInfos
    }

    static async get(id) {
        let contactInfo = await db.ContactInfo.findByPk(id)
        return contactInfo.toJSON();
    }
}

module.exports = ContactInfo;