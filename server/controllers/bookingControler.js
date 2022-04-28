const book = require("../models/bookingModel");

//create book
const booking = async (req, res) => {
  book.create(req.body)
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json(err));
};
// get book
const AllBook = async (req, res) => {
  book.find().populate("seats")
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json(err));
};
// get book by email
const BookByEmail = async (req, res) => {
  const {email} = req.body
  book.find({email: email}).populate("seats")
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json(err));
};
//delete book
const deleteBook = async (req, res) => {
  book.findByIdAndDelete(req.params.bookId, req.body)
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json(err));
};
// update book
const updateBook = async (req, res) => {
  book.findByIdAndUpdate(req.params.bookId, req.body, { new: true })
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json(err));
};
module.exports = { booking, AllBook, deleteBook, updateBook, BookByEmail};
