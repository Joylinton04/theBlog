const route = require('express').Router()
const register = require('../controllers/auth.controller')




route.post('/register', register)





module.exports = route;