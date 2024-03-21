const express = require('express')

const UserController = require('../Controller/UserController')

const FormController = require('../Controller/FormController')

const jwtMiddleware = require('../MiddleWares/JwtMiddleware')

const multerConfig = require('../MiddleWares/MulterMiddleware')



const router = new express.Router()


router.post('/register',UserController.register)

router.post('/login',UserController.login)

router.post('/logout', jwtMiddleware, UserController.logout); 


router.post('/form/add',jwtMiddleware,multerConfig.single('file'),FormController.addForm)

router.post('/reset-password',jwtMiddleware, UserController.resetPassword);


module.exports = router

