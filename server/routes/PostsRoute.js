const express = require("express");
const { register, AllPosts } = require("../controllers/PostsController");
const router = express.Router();
router.post("/register", register);
router.get("/allPosts", AllPosts);
module.exports = router;
