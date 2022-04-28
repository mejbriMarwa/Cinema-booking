import React, { useState } from "react";
import { addProgram } from "../slices/programSlice";
import { useSelector, useDispatch } from "react-redux";

const AddProgram = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({});
  const { isAuth, role } = useSelector((state) => state.user);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    dispatch(addProgram(input));
  };
  return (
    <div>
      {isAuth && role === "admin" ? (
        <div className="AddProgram">
          <form>
            <input
              type="text"
              name="titleMovie"
              onChange={handleChange}
              placeholder="titleMovie"
            />
            <input type="datetime-local" name="dateMovie" onChange={handleChange} />
            <button type="submit" onClick={handleSubmit}>
              add program
            </button>
          </form>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default AddProgram;
