const express = require("express");
const {
  getMovie,
  registerMovies,
  deleteMovie,
  
  updateMovie
} = require("../controllers/movieController");
// const multer = require("multer");

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./img-uploads");
//   },
//   filename: function (req, file, cb) {
//     console.log(file);
//     const uniqueSuffix = Date.now() + "-" + file.originalname;
//     cb(null, uniqueSuffix);
//   },
// });
// const upload = multer({ storage: storage });
const adminCheckMiddleware = require("../middlewares/adminCheck");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
router.get("/", getMovie);
// router.post("/", authMiddleware, adminCheckMiddleware, createMovie);
router.post("/registerMovies", registerMovies);
router.delete("/:movieId", deleteMovie);
router.put("/:movieId", updateMovie);

module.exports = router;
