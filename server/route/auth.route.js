const route = require('express').Router()
const register = require('../controllers/auth.controller')
const authMiddleware = require('../middleware/auth.middleware')




route.post('/register',register)





module.exports = route;