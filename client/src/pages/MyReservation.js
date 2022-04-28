import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { ByEmail, ShowBooking, ShowBookingByEmail } from "../slices/bookSlice";
import { loadUserInfo } from "../slices/userSlice";
import { useNavigate, Outlet } from "react-router-dom";

const MyReservation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUserInfo());
    dispatch(ShowBooking());
  }, [dispatch]);
  const { userInfo } = useSelector((state) => state.user);
  const { BookList } = useSelector((state) => state.book);
  return (
    <div>
       <div class="page-contentCards">
      {BookList.map((book) => (
        <div class="cardsReservation" key={book._id}>
          {book.email === userInfo.email ? (
            <div class="contentCards">
              <h2 class="title First"> Reservation Information</h2>
              <h2 class="title">{book.Username}</h2>
              <h2 class="title">{book.email}</h2>
              <h2 class="title">{book.movie}</h2>
              <h2 class="title">{book.seats.name}</h2>
            </div>
            
          ) : (
            <></>
          )}
          <br />
          <br />
        </div>
      ))}
     
    </div>
     <button class="btnCards" onClick={() => navigate("/MoviesLists")}>
        go back
      </button>
      <Outlet />
    </div>
   
  );
};

export default MyReservation;
