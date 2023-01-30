const express = require('express');
const { signUp, login } = require('../controllers/userController');
const userRouter = express.Router();

// userRouter.post("/api/signup", signUp);
// userRouter.route('/').get(login)
userRouter.route('/registration').post(signUp)
userRouter.route('/login').get(login)
// userRouter.get("/api/login", login);

module.exports = userRouter; // Path: backend\controllers\userController.js