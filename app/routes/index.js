const Router = require('express').Router
const user = require('./user/user')
const contact = require('./contact/contact')
const contactinfo = require('./contactinfo/contactinfo')

const routes = Router();

routes.use('/user', user)
routes.use('/:userId/contact', contact)
routes.use('/contactinfo', contactinfo)

module.exports = routes