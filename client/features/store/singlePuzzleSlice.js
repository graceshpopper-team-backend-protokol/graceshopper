import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {};

/**
 * async thunk that fetches single puzzle
 * @param {number} puzzleid to request that specific puzzle from the database
 * @returns puzzle data it received from the AJAX request
 * @catches error if database request goes wrong
 */
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

/**
 * async thunk that updates single puzzle
 * @param {object} puzzleData to request an update on the database
 * @returns puzzle data it received from the AJAX request
 * @catches error if database request goes wrong
 */
export const updateSinglePuzzle = createAsyncThunk(
  "updatePuzzle",
  async (puzzleData) => {
    try {
      const { data } = await axios.put(
        `/api/puzzles/${puzzleData.id}`,
        puzzleData
      );
      return data;
    } catch (err) {
      console.error(err);
    }
  }
);

/**
 * async thunk that creates a puzzle
 * @param {object} puzzleData to create a puzzle in the database
 * @returns puzzle data it received from the AJAX request
 * @catches error if database request goes wrong
 */
export const createPuzzle = createAsyncThunk("addPuzzle", async (newPuzzle) => {
  try {
    const { data } = await axios.post("/api/puzzles", newPuzzle);
    return data;
  } catch (err) {
    console.error(err);
  }
});

/**
 * singlePuzzle slice
 * initialState is set as an empty object
 * our async reducers are firing whenever our async thunks fulfill the request
 * all fulfilled requests are being set as the new state
 */
export const singlePuzzleSlice = createSlice({
  name: "singlePuzzle",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSinglePuzzle.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(updateSinglePuzzle.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(createPuzzle.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

/**
 * selector function that allows us to access state by dispatching an action to the store
 * @param {object} state puzzle object
 * @returns the puzzle stored in state
 */
export const selectSinglePuzzle = (state) => {
  return state.singlePuzzle;
};

export default singlePuzzleSlice.reducer;
