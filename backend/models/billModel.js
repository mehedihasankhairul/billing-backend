const mongoose = require('mongoose');

const billSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'Please add Full Name'],
  },
  email: {
    type: String,
    required: [true, 'Please add Billing Email'],
  },

  payableAmount: {
    type: Number,
    required: [true, 'Please add a positive or negative number'],
  },

  phone: {
    type: Number,
    required: [true, 'Please add Billing Phone'],
  },
}, { timestamps: true });

module.exports = mongoose.model('Bill', billSchema);