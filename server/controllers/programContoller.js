const program = require("../models/programModel");

//create program
const AddProgram = async (req, res) => {
  program.create(req.body)
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json(err));
};
// get program
const ShowProgram = async (req, res) => {
  program.find()
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json(err));
};

//delete program
const deleteProgram = async (req, res) => {
  program.findByIdAndDelete(req.params.programId, req.body)
    .then((data) => res.json(`${data.titleMovie}'s program has been deleted`))
    .catch((err) => res.status(500).json(err));
};
// update program
const updateProgram = async (req, res) => {
  program.findByIdAndUpdate(req.params.programId, req.body, { new: true })
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json(err));
};
module.exports = { AddProgram, ShowProgram, deleteProgram, updateProgram };
