const express = require('express');
const billingRouter = express.Router();
const { getBills, addBilling, updateBill, deleteBill } = require('../controllers/billingController');


// get all bills & create bill
billingRouter.route('/').get(getBills).post(addBilling);

// update & delete bill
billingRouter.route('/:id').delete(deleteBill).put(updateBill);



module.exports = billingRouter;