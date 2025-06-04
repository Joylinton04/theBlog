const route = require('express').Router()
const blogController = require('../controllers/blog.controller')
const authMiddleware = require('../middleware/auth.middleware')



route.post('/', authMiddleware, blogController.postBlog)

module.exports = route