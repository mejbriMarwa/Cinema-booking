import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// show program
export const AllProgram = createAsyncThunk(
  "program/AllProgram",
  async (info, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/program/showProgram", info);
      return data;
    } catch (errors) {
      return rejectWithValue(errors.response.data.msg);
    }
  }
);
//   Add Program
export const addProgram = createAsyncThunk(
  "program/addProgram",
  async (info, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("http://localhost:5000/api/program/addProgram", info);
      return data;
    } catch (errors) {
      return rejectWithValue(errors.response.data.msg);
    }
  }
);

//   Delete Program
export const removeProgram = createAsyncThunk(
  "program/removeProgram",
  async (programId, { rejectWithValue }) => {
    try {
      await axios.delete(`http://localhost:5000/api/program/${programId}`, programId);
      return AllProgram();
    } catch (errors) {
      return rejectWithValue(errors.response.data.msg);
    }
  }
);
// update program

export const updateProgram = createAsyncThunk(
  "program/updateProgram",
  async (programInfo, programId, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(
        `http://localhost:5000/api/program/${programId}`,
        programInfo
      );
      return data;
    } catch (errors) {
      return rejectWithValue(errors.response.data.msg);
    }
  }
);
const ProgramSlice = createSlice({
  name: "program",
  initialState: {
    loading: false,
    ProgramList: [],
    errors: null,
  },
  extraReducers: {
    [AllProgram.pending]: (state, action) => {
      state.loading = true;
    },
    [AllProgram.rejected]: (state, action) => {
      state.errors = action.payload;
    },
    [AllProgram.fulfilled]: (state, action) => {
      state.ProgramList = action.payload;
      state.errors = null;
    },
  },
});
export default ProgramSlice.reducer;
