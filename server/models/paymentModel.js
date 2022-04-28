const mongoose = require("mongoose");

const PaymentSchema = mongoose.Schema({
  Username: {
    type: String,
    required: true,
  },
  Phone: {
    type: Number,
  },
  Carte: {
    type: Number,
    required: true,
  },
});
module.exports = mongoose.model("payment", PaymentSchema);
