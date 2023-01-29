const express = require('express');
const router = express.Router();
const { getBills, addBilling, updateBill, deleteBill } = require('../controllers/billingController');


// get all bills & create bill
router.route('/').get(getBills).post(addBilling);

// update & delete bill
router.route('/:id').delete(deleteBill).put(updateBill);



module.exports = router;