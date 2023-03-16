const db = require('../../../../models/index');

const _ = require('lodash');
const { v4: uuidv4 } = require('uuid');

class Contact {
    static contacts = [
        {
            "userId": "b1b84f98-6157-4afc-a67e-622407d25a99",
            "name": "home",
            "id": "f7ee7780-30b3-48a0-8479-df52f24d7719"
        }
    ]

    constructor(userId, name) {
        this.userId = userId
        this.name = name
    }

    createId() {
        this.id = uuidv4()
    }

    async create() {
        this.createId()
        let data = await db.Contact.create(this)
        console.log(data);
    }

    static async getAll(userId) {
        let contacts = await db.Contact.findAll({ where: { userId: userId } });
        console.log('app/api/v1/view/contact.js','33',contacts);
        return contacts;
    }

    static async get(id) {
        let contact = await db.Contact.findByPk(id);
        return contact.toJSON();
    }
}

module.exports = Contact;