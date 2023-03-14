const { v4: uuidv4 } = require('uuid');

class ContactInfo {
    static contactinfos = []

    constructor(username, password) {
        this.username = username
        this.password = password
    }

    createId() {
        this.id = uuidv4()
    }

    createOne() {
        this.createId()
        users.push(JSON.parse(this))
    }

    updateOne(id) {
        return users
    }

    static getAll() {
        return users
    }

    static getOne(id) {
        return users
    }

    static delete(id) {
        return users
    }
}

module.exports = ContactInfo;