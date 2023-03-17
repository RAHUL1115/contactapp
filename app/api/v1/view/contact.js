const db = require('../../../db/models');

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

    setId(id) {
        this.id = id;
    }

    async update() {
        return await db.Contact.update(this,{where: {id:this.id}})
    }

    async create() {
        this.createId()
        return await db.Contact.create(this)
    }

    static async getAll(userId) {
        let contacts = await db.Contact.findAll({ where: { userId: userId } });
        return contacts;
    }

    static async get(id) {
        let contact = await db.Contact.findByPk(id);
        return contact.toJSON();
    }

    static async delete(id) {
        return await db.Contact.destroy({where:{id:id}})
    }
}

module.exports = Contact;