import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// register POST
export const RegisterPost = createAsyncThunk(
  "post/RegisterPost",
  async (info, { rejectWithValue }) => {
    try {
      await axios.post("http://localhost:5000/api/posts/register", info);
    } catch (errors) {
      return rejectWithValue(errors.response.data.msg);
    }
  }
);

// get POST
export const getPost = createAsyncThunk(
  "post/getPost",
  async (info, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/posts/allPosts", info);
      return data;
    } catch (errors) {
      return rejectWithValue(errors.response.data.msg);
    }
  }
);

const postSlice = createSlice({
  name: "post",
  initialState: {
    loading: false,
    PostList: [],
    errors: null,
  },
  extraReducers: {
    [getPost.pending]: (state, action) => {
      state.loading = true;
    },
    [getPost.fulfilled]: (state, action) => {
      state.PostList = action.payload;
      state.errors = null;
    },
    [getPost.rejected]: (state, action) => {
      state.errors = action.payload;
    },
  },
});
export default postSlice.reducer;
