function getAllContactinfo(req, res) {
    res.status(200).json({ "status": "get all Contactinfos" })
}

function getContactinfo(req, res) {
    res.status(200).json({ "status": "get Contactinfo" })
}

function createContactinfo(req, res) {
    res.status(200).json({ "status": "create Contactinfos" })
}

function updateContactinfo(req, res) {
    res.status(200).json({ "status": "update Contactinfos" })
}

function deleteContactinfo(req, res) {
    res.status(200).json({ "status": "delete Contactinfos" })
}

module.exports = {
    getAllContactinfo,
    getContactinfo,
    createContactinfo,
    updateContactinfo,
    deleteContactinfo
}