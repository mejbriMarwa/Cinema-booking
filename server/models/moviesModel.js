const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  descreption: {
    type: String,
    required: true,
  },
  movieImg: {
    type: String,
  },
  Price: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("movie", movieSchema);
