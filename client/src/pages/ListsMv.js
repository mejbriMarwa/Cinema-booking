import React from "react";
import { Link } from "react-router-dom";
const ListsMv = (movie) => {
  const handleAddLocalStorage = (movie) => {
    localStorage.setItem("movie", JSON.stringify(movie));
  };
  return (
   

    <div className="cardMovie">
      <ul class="cards">
        <li class="cards__item">
          <div class="card">
            <div class="card__image ">
              <img src={movie.movieImg} />
            </div>
            <div class="card__content">
              <div class="card__title">{movie.title}</div>
              <p class="card__text">{movie.descreption}</p>
              <div class="card__title">{movie.Price}</div>
              <Link to="/SeatsMovie">
                <button
                  type="button"
                  className="btn btn--block card__btn"
                  onClick={() => handleAddLocalStorage(movie)}
                >
                  Book Movie
                </button>
              </Link>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ListsMv;
