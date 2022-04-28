import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getSeats = createAsyncThunk(
  "seats/getSeats",
  async (info, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/seats", info);
      return data;
    } catch (errors) {
      return rejectWithValue(errors.response.data.msg);
    }
  }
);

export const updateSeats = createAsyncThunk(
  "seats/updateSeats",
  async (info, { rejectWithValue }, dispatch) => {
    try {
      const { data } = await axios.put(`http://localhost:5000/api/seats/${info._id}`);

      dispatch(getSeats());
      return data;
    } catch (errors) {
      return rejectWithValue(errors.response.data.msg);
    }
  }
);

const SeatsSlice = createSlice({
  name: "seats",
  initialState: {
    seatInfo: {},
    loading: false,
    seatsList: [],
    errors: null,
  },
  extraReducers: {
    [getSeats.pending]: (state, action) => {
      state.loading = true;
    },
    [getSeats.fulfilled]: (state, action) => {
      state.seatsList = action.payload;
      state.errors = null;
    },
    [getSeats.rejected]: (state, action) => {
      state.errors = action.payload;
    },
  },
});
export default SeatsSlice.reducer;
