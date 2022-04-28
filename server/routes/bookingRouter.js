const express = require("express");
const {
  booking,
  AllBook,
  deleteBook,
  updateBook,
  BookByEmail,
} = require("../controllers/bookingControler");
const router = express.Router();
router.post("/booking", booking);
router.get("/allBook", AllBook);
router.get("/myBook", BookByEmail);
router.delete("/:bookId", deleteBook);
router.put("/:bookId", updateBook);
module.exports = router;
