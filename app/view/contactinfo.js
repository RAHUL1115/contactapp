const _ = require('lodash');
const { v4: uuidv4 } = require('uuid');

class ContactInfo {
    static contactinfos = [
        {
            "contactId": "f7ee7780-30b3-48a0-8479-df52f24d7719",
            "number": "917021091055",
            "id": "12e93c55-0248-47a7-8056-deac3d729a4a"
        }
    ]

    constructor(contactId,number) {
        this.contactId = contactId
        this.number = number
    }

    createId() {
        this.id = uuidv4()
    }

    create() {
        this.createId()
        ContactInfo.contactinfos.push(this)
    }

    static getAll(contactId) {
        let contactInfos = _.filter(ContactInfo.contactinfos, (contactinfo) => {
            if (contactinfo.contactId == contactId) return true;
        });
        return contactInfos
    }

    static get(id) {
        let contactInfo = _.find(ContactInfo.contactinfos, (contactinfo) => {
            if (contactinfo.id == id) return true;
        });
        return contactInfo
    }
}

module.exports = ContactInfo;