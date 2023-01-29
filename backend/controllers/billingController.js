const asyncHandler = require("express-async-handler");

const Bill = require("../models/billModel");

// get bills
// route GET /api/billing-list
const getBills = asyncHandler(async (req, res) => {
  const bills = await Bill.find();
  res.status(200).json(bills);
})

// Create bill
// route POST /api/billing-list
const addBilling = asyncHandler(async (req, res) => {
  if (!req.body.fullName || !req.body.email || !req.body.payableAmount || !req.body.phone) {
    res.status(400)
    throw new Error("Please add a bill");
  }

  const bill = await Bill.create({ fullName: req.body.fullName, email: req.body.email, payableAmount: req.body.payableAmount, phone: req.body.phone });

  res.status(200).json(bill);
})

// Update bills
// route PUT /api/billing-list/:id
const updateBill = asyncHandler(async (req, res) => {
  const bill = await Bill.findById(req.params.id);
  // if (!bill) {
  //   res.status(404);
  //   throw new Error("Bill not found");
  // }
  // update bill
  const updatedBill = await Bill.findByIdAndUpdate(req.params.id, req.body, { new: true })

  res.status(200).json(updatedBill);
})
// Delete bills
// route DELETE /api/billing-list/:id
const deleteBill = asyncHandler(async (req, res) => {
  const bill = await Bill.findById(req.params.id);
  if (!bill) {
    res.status(404);
    throw new Error("Bill not found");
  }
  // delete bill
  await bill.remove();

  res.status(200).json({ id: req.params.id });
})

module.exports = {
  getBills,
  addBilling,
  updateBill,
  deleteBill
}