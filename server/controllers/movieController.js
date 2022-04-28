// const express = require("express");
const movie = require("../models/moviesModel");
// const fileUpload = require("express-fileupload");
// const app = express();
// app.use(fileUpload());

// @desc create a movie
// @route POST /api/movie/
// @access PRIVATE user/admin

const createMovie = async (req, res) => {
  try {
    const { title, descreption, movieImg } = req.body;
    await movie.create({
      title,
      descreption,
      movieImg
    });
    res.status(201).json({ msg: "movie create" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "something went wrong" });
  }
};

// @desc get all movie
// @route GET /api/movie/
// @access PUBLIC

const getMovie = async (req, res) => {
  try {
    const movies = await movie.find();
    res.status(201).json(movies);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "something went wrong" });
  }
};
// Add Movies
const registerMovies = async (req, res) => {
  movie.create(req.body)
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json(err));
};
// delete movie
const deleteMovie = async (req, res) => {
  try {
    movie.findByIdAndDelete(req.params.movieId, req.body);
    res.status(201).json({ msg: "movie deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "something went wrong" });
  }
};
// @desc update user movie picture
// @route PUT /api/movie/moviePic
// @access PRIVATE - owner

// const AddMoviePic = async (req, res) => {
//   try {
//     console.log(req.file);
//     const movieImg = `http://localhost:5000/uploads/${req.file.filename}`;
//     await movie.post(req.movieId, { moviePic: movieImg });
//     res.json({ msg: "movie picture added" });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ msg: "something went wrong" });
//   }
// };
// update movie
const updateMovie = async (req, res) => {
  movie
    .findByIdAndUpdate(req.params.movieId, req.body, { new: true })
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json(err));
};
module.exports = {
  createMovie,
  getMovie,
  registerMovies,
  deleteMovie,
  updateMovie,
};
