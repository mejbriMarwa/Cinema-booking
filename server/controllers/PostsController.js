const posts = require("../models/PostsModel");

//create Post
const register = async (req, res) => {
    posts.create(req.body)
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json(err));
};
// get posts
const AllPosts = async (req, res) => {
    posts.find()
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json(err));
};
module.exports = { register, AllPosts };
