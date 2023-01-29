// const getBills = async (req, res) => {
//   try {
//     const bills = await Bill.find();
//     res.status(200).json(bills);
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// }

// get bills
// route GET /api/billing-list
const getBills = (req, res) => {
  res.status(200).json({ message: "Get bills" });
}

// Create bill
// route POST /api/billing-list
const createBill = (req, res) => {
  res.status(200).json({ message: "Set bill" });
}

// Update bills
// route PUT /api/billing-list/:id
const updateBill = (req, res) => {
  res.status(200).json({ message: `Update bill ${req.params.id}` });
}

// Delete bills
// route DELETE /api/billing-list/:id
const deleteBill = (req, res) => {
  res.status(200).json({ message: `Update bill ${req.params.id}` });
}

module.exports = {
  getBills,
  createBill,
  updateBill,
  deleteBill
}