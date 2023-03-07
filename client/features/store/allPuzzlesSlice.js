import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//async thunk communicates with db to retrieve all puzzles
export const fetchPuzzles = createAsyncThunk("puzzles/allPuzzles", async () => {
  try {
    const { data } = await axios.get(`/api/puzzles`);
    return data;
  } catch (err) {
    console.error(err);
  }
});

//async thunk to delete puzzle from database
export const deletePuzzleAsync = createAsyncThunk(
  "deletePuzzle",
  async (id) => {
    const { data } = await axios.delete(`api/puzzles/${id}`);
    return data;
  }
);

export const allPuzzlesSlice = createSlice({
  name: "puzzles",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPuzzles.fulfilled, (state, action) => {
      //add puzzles to state array
      return action.payload;
    });
  },
});

/**
 * selector function that allows us to access state by dispatching an action to the store
 * @param {[]} state puzzle array
 * @returns the puzzles stored in state
 */
export const selectPuzzles = (state) => {
  return state.puzzles;
};

export default allPuzzlesSlice.reducer;
