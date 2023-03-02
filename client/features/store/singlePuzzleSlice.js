import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {};

//async thunk communicates with db to get puzzle with matching ID
export const fetchSinglePuzzle = createAsyncThunk(
  "singlePuzzle",
  async (id) => {
    try {
      const { data } = await axios.get(`/api/puzzles/${id}`);
      return data;
    } catch (err) {
      console.error(err);
    }
  }
);

export const singlePuzzleSlice = createSlice({
  name: "singlePuzzle",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSinglePuzzle.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectSinglePuzzle = (state) => {
  return state.singlePuzzle;
};

export default singlePuzzleSlice.reducer;
