import { configureStore } from "@reduxjs/toolkit";
import allPuzzlesSlice from "./allPuzzlesSlice";
import singlePuzzleSlice from "./singlePuzzleSlice";
import allUsersSlice from "./allUsersSlice";
import singleUserSlice from "./singleUserSlice";
import orderSlice from "./orderSlice";

//store contains all slices
const store = configureStore({
  reducer: {
    puzzles: allPuzzlesSlice,
    singlePuzzle: singlePuzzleSlice,
    users: allUsersSlice,
    singleUser: singleUserSlice,
    order: orderSlice,
  },
});

export default store;
