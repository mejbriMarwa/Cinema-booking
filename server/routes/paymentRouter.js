const express = require("express");
const { CreatePayment, AllPayment } = require("../controllers/paymentController");
const router = express.Router();
router.post("/AddPayment", CreatePayment);
router.get("/allPayment", AllPayment);
module.exports = router;
