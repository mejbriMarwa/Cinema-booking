import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerMovies } from "../slices/movieSlice";

const AddMovieList = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({});

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    dispatch(registerMovies(input));
  };

  return (
    <div className="addList">
      <h1>Add movies</h1>
      <form>
        <input
          type="text"
          name="title"
          onChange={handleChange}
          placeholder="Title"
        />{" "}
        <br />
        <input
          type="text"
          name="movieImg"
          onChange={handleSubmit}
          placeholder="movieImg"
        />
        <br />
        <input
          type="text"
          name="descreption"
          onChange={handleChange}
          placeholder="descreption"
        />
        <br />
        <input
          type="text"
          name="Price"
          onChange={handleChange}
          placeholder="Price"
        />
        <br />
        <input type="submit" value="Add Movie " onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default AddMovieList;
