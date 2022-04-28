const mongoose = require("mongoose");
const postScheme = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  descreption: {
    type: String,
    required: true,
  },
  ImagePost: {
    type: String,
  },
});
const model = mongoose.model("posts", postScheme);
module.exports = model;
