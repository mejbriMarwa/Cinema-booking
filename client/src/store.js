import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import movieReducer from "./slices/movieSlice";
import postReducer from "./slices/postSlice";
import bookReducer from "./slices/bookSlice";
import paymentReducer from "./slices/paymentSlice";
import programReducer from "./slices/programSlice";
import SeatsSlice from "./slices/seatsSlice";
export default configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
    post: postReducer,
    book: bookReducer,
    payment: paymentReducer,
    program: programReducer,
    seats: SeatsSlice,
  },
});
