const express = require("express");
const { registerSeats, AllSeats, updateSeatAvailable } = require("../controllers/seatsControllers");
const router = express.Router();

router.post("/", registerSeats);
router.get("/", AllSeats);
router.put('/:seatsId',updateSeatAvailable);

module.exports = router;
