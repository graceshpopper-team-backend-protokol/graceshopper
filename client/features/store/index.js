import { configureStore } from "@reduxjs/toolkit";
import allPuzzlesSlice from "./allPuzzlesSlice"; 

//store contains all slices
const store = configureStore({
  reducer: {
    puzzles: allPuzzlesSlice,
  }
});

export default store;
