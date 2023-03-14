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

    create() {
        this.createId()
        Contact.contacts.push(this)
    }

    static getAll(userId) {
        let contacts = _.filter(Contact.contacts, (contact) => {
            if (contact.userId == userId) return true;
        });
        return contacts
    }

    static get(id) {
        let contacts = _.find(Contact.contacts, (contact) => {
            if (contact.id == id) return true;
        });
        return contacts
    }
}

module.exports = Contact;