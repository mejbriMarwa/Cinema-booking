import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteMovie, getMovie, registerMovies } from "../slices/movieSlice";
import { Button, Modal } from "react-bootstrap";
import ListsMv from "./ListsMv";
import AddMovieLists from "./AddMovieList";
const MoviesLists = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { movieList, loading, errors } = useSelector((state) => state.movie);
  const { isAuth, role } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [input, setInput] = useState();

  const handleChange = (e) => {
    e.preventDefault();
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerMovies(input));
  };

  useEffect(() => {
    dispatch(getMovie());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteMovie(id));
  };

  return (
    <div>
      <div className="movieListsMovie">
        {loading && <p>loading ...</p>}
        {errors && <p>{errors}</p>}
        {movieList &&
          movieList.map((movie) => (
            <>
              <ListsMv {...movie} />
            </>
          ))}
      </div>
      {isAuth && role === "admin" ? <AddMovieLists /> : <></>}
    </div>
  );
};

export default MoviesLists;
