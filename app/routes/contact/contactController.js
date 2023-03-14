function getAllContact(req, res) {
    let { userId } = req.params
    console.log(req.params);
    res.status(200).json({ "status": "get all Contacts " + userId })
}

function getContact(req, res) {
    res.status(200).json({ "status": "get Contact" })
}

function createContact(req, res) {
    res.status(200).json({ "status": "create Contacts" })
}

function updateContact(req, res) {
    res.status(200).json({ "status": "update Contacts" })
}

function deleteContact(req, res) {
    res.status(200).json({ "status": "delete Contacts" })
}

module.exports = {
    getAllContact,
    getContact,
    createContact,
    updateContact,
    deleteContact
}