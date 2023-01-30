const express = require('express');
const { signUp, login } = require('../controllers/userController');
const userRouter = express.Router();


userRouter.route('/registration').post(signUp)
userRouter.route('/login').get(login)

module.exports = userRouter; // Path: backend\controllers\userController.js