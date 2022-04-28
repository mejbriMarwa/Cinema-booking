import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { updateSeats } from "./seatsSlice";

// show book
export const ShowBooking = createAsyncThunk(
  "book/ShowBooking",
  async (info, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/book/allBook", info);
      return data;
    } catch (errors) {
      return rejectWithValue(errors.response.data.msg);
    }
  }
);

// show book by email
export const ByEmail = createAsyncThunk(
  "book/ByEmail",
  async (info, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/book/myBook", info);
      return data;
    } catch (errors) {
      return rejectWithValue(errors.response.data.msg);
    }
  }
);

// get POST
export const Postbooking = createAsyncThunk(
  "book/Postbooking",
  async (bookInfo, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("http://localhost:5000/api/book/booking", bookInfo);
      return data;
    } catch (errors) {
      return rejectWithValue(errors.response.data.msg);
    }
  }
);

// remove book
export const removeBooking = createAsyncThunk(
  "book/removeBooking",
  async (bookId, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/api/book/${bookId}`, bookId);
      return data;
    } catch (errors) {
      return rejectWithValue(errors.response.data.msg);
    }
  }
);

// update book
export const updateBooking = createAsyncThunk(
  "book/updateBooking",
  async (infoBook, bookId, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(`/api/book/${bookId}`, infoBook);
      return data;
    } catch (errors) {
      return rejectWithValue(errors.response.data.msg);
    }
  }
);

const BookingSlice = createSlice({
  name: "book",
  initialState: {
    loading: false,
    BookList: [],
    errors: null,
  },
  extraReducers: {
    [ShowBooking.pending]: (state, action) => {
      state.loading = true;
    },
    [ShowBooking.fulfilled]: (state, action) => {
      state.BookList = action.payload;
      state.errors = null;
    },
    [ShowBooking.rejected]: (state, action) => {
      state.errors = action.payload;
    },
    [Postbooking.pending]: (state, action) => {
      state.loading = true;
    },
    [Postbooking.fulfilled]: (state, action) => {
      state.BookList = action.payload;
      state.errors = null;
    },
    [Postbooking.rejected]: (state, action) => {
      state.errors = action.payload;
    },
    [ByEmail.pending]: (state, action) => {
      state.loading = true;
    },
    [ByEmail.fulfilled]: (state, action) => {
      state.BookList = action.payload;
      state.errors = null;
    },
    [ByEmail.rejected]: (state, action) => {
      state.errors = action.payload;
    },
  },
});
export default BookingSlice.reducer;
