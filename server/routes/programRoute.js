const express = require("express");
const {
  AddProgram,
  ShowProgram,
  deleteProgram,
  updateProgram,
} = require("../controllers/programContoller");
const router = express.Router();
router.post("/addProgram", AddProgram);
router.get("/showProgram", ShowProgram);
router.delete("/:programId", deleteProgram);
router.put("/:programId", updateProgram);
module.exports = router;
