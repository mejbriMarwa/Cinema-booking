const mongoose = require("mongoose");
const seatsScheme = new mongoose.Schema({
  name:{
      type:String,
  },
  seatAvailable:{
      type:Boolean,
      default:true,
  }
});
const model = mongoose.model("seats", seatsScheme);
module.exports = model;
