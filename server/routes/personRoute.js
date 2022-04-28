const express = require("express");
const {
  register,
  login,
  loadPersonInfo,
  updateProfilePic,
} = require("../controllers/personController");
const router = express.Router();
const { body } = require("express-validator");
const personValidation = require("../middlewares/personValidation");

const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./img-uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + file.originalname;
    cb(null, uniqueSuffix);
  },
});
const upload = multer({ storage: storage });

const authMiddleware = require("../middlewares/authMiddleware");
router.put(
  "/profilePic",
  authMiddleware,
  upload.single("profilePicture"),
  updateProfilePic
);
router.post("/register", personValidation, register);
router.post("/login", personValidation, login);
router.get("/personInfo", authMiddleware, loadPersonInfo);

module.exports = router;
