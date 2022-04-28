import React from "react";
import "./components.css";
const postMovie = ({ title, descreption, ImagePost }) => {
  return (
    <div className="PostsMv">
      <span>
        <h2>{title}</h2>
        <img src={ImagePost} alt="" />
        <h4>{descreption}</h4>
      </span>

    </div>
   
  );
};

export default postMovie;
