const route = require('express').Router()
const authControllers = require('../controllers/auth.controller')
const authMiddleware = require('../middleware/auth.middleware')


// registerd users

route.post('/register',authControllers.register)
route.post('/isAuth',authControllers.isAuthenticated)
route.post('/custom-token',authControllers.createCustomToken)
route.get('/get-users', authMiddleware, authControllers.getUsers)





module.exports = route;