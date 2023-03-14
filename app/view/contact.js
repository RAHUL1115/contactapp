const { v4: uuidv4 } = require('uuid');

class Contact {
    static contacts = []

    constructor(userId, name) {
        this.userId = userId
        this.name = name
    }

    createId() {
        this.id = uuidv4()
    }


    createOne() {
        this.createId()
        Contact.contacts.push(JSON.parse(this))
    }

    updateOne(id) {
        return Contact.contacts
    }

    static getAll() {
        return Contact.contacts
    }

    static getOne(id) {
        return Contact.contacts
    }

    static delete(id) {
        return Contact.contacts
    }
}

module.exports = Contact;