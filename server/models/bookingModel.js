const mongoose = require("mongoose");

const BookingSchema = mongoose.Schema({
  Username: {
    type: String,
  },
  email: {
    type: String,
  },
  movie: {
    type: String,
  },
  seats: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "seats",
  },
});
module.exports = mongoose.model("book", BookingSchema);
