const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please add an email'],
  },
  password: {
    type: String,
    required: [true, 'Please add a password'],
  },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema); // Path: backend\controllers\userController.js