import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUserInfo } from "../slices/userSlice";
import { useEffect } from "react";
import { ShowBooking } from "../slices/bookSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);
  const { BookList, pending, rejected } = useSelector((state) => state.book);
  useEffect(() => {
    dispatch(ShowBooking());
  }, [dispatch]);

  useEffect(() => {
    dispatch(loadUserInfo());
  }, [dispatch]);
  return (
    <div class="page-contentCards">
      <div className="cardsReservation">
        {BookList.map((book) => (
          <div key={book._id}>
            <div class="contentCards">
              <h4 class="title First">List of people who made reservations</h4>
              <h3 class="title">{book.Username}</h3>
              <h3 class="title">{book.email}</h3>
              <h3 class="title">{book.movie}</h3>
              <h3 class="title">{book.seats.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
