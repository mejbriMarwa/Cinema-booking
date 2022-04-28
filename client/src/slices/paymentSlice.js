import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// add payment
export const PaymentPost = createAsyncThunk(
  "payment/PaymentPost",
  async (info, { rejectWithValue }) => {
    try {
      await axios.post("http://localhost:5000/api/payment/AddPayment", info);
    } catch (errors) {
      return rejectWithValue(errors.response.data.msg);
    }
  }
);

// get payment
export const getPayment = createAsyncThunk(
  "payment/getPayment",
  async (info, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/payment/allPayment", info);
      return data;
    } catch (errors) {
      return rejectWithValue(errors.response.data.msg);
    }
  }
);

const paymentSlice = createSlice({
  name: "payment",
  initialState: {
    loading: false,
    PaymentList: [],
    errors: null,
  },
  extraReducers: {
    [getPayment.pending]: (state, action) => {
      state.loading = true;
    },
    [getPayment.fulfilled]: (state, action) => {
      state.PaymentList = action.payload;
      state.errors = null;
    },
    [getPayment.rejected]: (state, action) => {
      state.errors = action.payload;
    },
  },
});
export default paymentSlice.reducer;
