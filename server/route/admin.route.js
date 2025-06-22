const makeUserAdmin = require('../controllers/admin.controller')
const authMiddleware = require('../middleware/auth.middleware')

const route = require('express').Router()


route.post('/make-user-admin',authMiddleware,makeUserAdmin)

module.exports = route