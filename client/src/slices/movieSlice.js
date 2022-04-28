import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// get all movies
export const getMovie = createAsyncThunk(
  "movie/getMovie",
  async (info, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/movie", {
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      return data;
    } catch (errors) {
      return rejectWithValue(errors.response.data.msg);
    }
  }
);

export const registerMovies = createAsyncThunk(
  "post/registerMovies",
  async (info, { rejectWithValue, dispatch }) => {
    try {
      await axios.post("http://localhost:5000/api/movie/registerMovies", info);
      return dispatch(getMovie());
    } catch (errors) {
      return rejectWithValue(errors.response.data.msg);
    }
  }
);
// deleteMovie
export const deleteMovie = createAsyncThunk(
  "movie/deleteMovie",
  async (movieId, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`http://localhost:5000/api/movie/${movieId}`, movieId);
      return data;
    } catch (errors) {
      return rejectWithValue(errors.response.data.msg);
    }
  }
);

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    loading: false,
    movieList: [],
    errors: null,
  },
  extraReducers: {
    [getMovie.pending]: (state, action) => {
      state.loading = true;
    },
    [getMovie.fulfilled]: (state, action) => {
      state.loading = false;
      state.movieList = action.payload;
      state.errors = null;
    },
    [getMovie.rejected]: (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    },
    [registerMovies.pending]: (state, action) => {
      state.loading = true;
    },
    [registerMovies.fulfilled]: (state, action) => {
      state.loading = false;
      state.movieList = action.payload;
      state.errors = null;
    },
    [registerMovies.rejected]: (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    },
    [deleteMovie.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteMovie.fulfilled]: (state, action) => {
      state.loading = false;
      state.movieList = action.payload;
      state.errors = null;
    },
    [deleteMovie.rejected]: (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    },
  },
});
export default movieSlice.reducer;
