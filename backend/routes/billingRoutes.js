const express = require('express');
const router = express.Router();
const {getBills, createBill, updateBill, deleteBill} = require('../controllers/billingController');


// get all bills & create bill
router.route('/').get(getBills).post(createBill);

// update & delete bill
router.route('/:id').delete(deleteBill).put(updateBill);



module.exports = router;