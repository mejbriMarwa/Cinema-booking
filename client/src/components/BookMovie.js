import React from "react";
import AddBook from "./AddBook";
import { useEffect} from "react";
import { useSelector , useDispatch } from "react-redux";
import { getMovie } from "../slices/movieSlice";

const BookMovie = () => {
  const { movieList } = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovie());
  }, [dispatch]);
  return (
    <div className="bookMovies">
   
         <AddBook />
    </div>
  );
};

export default BookMovie;
