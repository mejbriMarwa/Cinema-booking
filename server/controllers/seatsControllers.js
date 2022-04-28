const movie = require('../models/moviesModel');
const Seats = require('../models/seatsModel');

//create seat
const registerSeats = async (req, res) => {
    Seats.create(req.body)
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json(err));
};
// get Seats
const AllSeats = async (req, res) => {
    Seats.find()
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json(err));
};
//update seatAvailable
const updateSeatAvailable = async (req, res) => {
    Seats.findByIdAndUpdate(req.params.seatsId, 
        {seatAvailable: false})
      .then((data) => res.json(data))
      .catch((err) => res.status(500).json(err));
  };
module.exports = { registerSeats, AllSeats, updateSeatAvailable };
