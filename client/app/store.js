import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from '../features/auth/authSlice';
import allPuzzlesSlice from '../features/store/allPuzzlesSlice';
import singlePuzzleSlice from '../features/store/singlePuzzleSlice';
import allUsersSlice from '../features/store/allUsersSlice';
import singleUserSlice from "../features/store/singleUserSlice"

const store = configureStore({
  reducer: { auth: authReducer },
  puzzles: allPuzzlesSlice,
  singlePuzzle: singlePuzzleSlice,
  users: allUsersSlice,
  singleUser: singleUserSlice,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  });

export default store;
export * from '../features/auth/authSlice';
