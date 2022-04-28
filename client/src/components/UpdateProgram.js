import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProgram } from "../slices/programSlice";
const UpdateProgram = ({ programId }) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({});

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    dispatch(updateProgram(programId, input));
  };
  return (
    <div>
      <form>
        <input
          type="text"
          name="titleMovie"
          onChange={handleChange}
          placeholder="titleMovie"
        />
        <input type="datetime-local" name="dateMovie" onChange={handleChange} />
        <button type="submit" onClick={handleSubmit}>
          update program
        </button>
      </form>
    </div>
  );
};

export default UpdateProgram;
