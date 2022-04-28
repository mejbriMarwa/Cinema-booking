const mongoose = require("mongoose");

const ProgramSchema = mongoose.Schema({
  titleMovie: {
    type: String,
    required: true,
  },
  dateMovie: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("program", ProgramSchema);
