const payment = require("../models/paymentModel");

//create payment
const CreatePayment = async (req, res) => {
  payment.create(req.body)
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json(err));
};
// get all payment
const AllPayment = async (req, res) => {
  payment.find()
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json(err));
};
module.exports = { CreatePayment, AllPayment};
