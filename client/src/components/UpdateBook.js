import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateBooking } from "../slices/bookSlice";
const UpdateBook = ({ bookId }) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({});
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    dispatch(updateBooking(bookId, input));
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="Username"
          onChange={handleChange}
          placeholder="Username"
        />
        <input
          type="text"
          name="email"
          onChange={handleChange}
          placeholder="email"
        />
        <input
          type="text"
          name="movieName"
          onChange={handleChange}
          placeholder="movieName"
        />
        <input
          type="text"
          name="ReservedSeats"
          onChange={handleChange}
          placeholder=" ReservedSeats"
        />
        <button type="submit" onClick={handleSubmit}>
          update book
        </button>
      </form>
    </div>
  );
};

export default UpdateBook;
