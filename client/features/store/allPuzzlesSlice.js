import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//initialize empty array to put puzzles in

//async thunk communicates with db to retrieve all puzzles
export const fetchPuzzles = createAsyncThunk("puzzles/allPuzzles", async () => {
  try {
    const { data } = await axios.get(`/api/puzzles`);
    return data;
  } catch (err) {
    console.error(err);
  }
});

export const deletePuzzleAsync = createAsyncThunk(
  "deletePuzzle",
  async (id) => {
    const { data } = await axios.delete(`api/puzzles/${id}`);
    return data;
  }
)

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

export const selectPuzzles = (state) => {
  return state.puzzles;
};

export default allPuzzlesSlice.reducer;
