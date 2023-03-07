import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//initialize empty array to put users in
const initialState = [];

//async thunk communicates with db to retrieve all users
export const fetchUsers = createAsyncThunk("allUsers", async () => {
  try {
    const { data } = await axios.get(`/api/users`);
    return data;
  } catch (err) {
    console.error(err);
  }
});

//async thunk communicates with db to add a user
export const addUser = createAsyncThunk(
  "users/addUser",
  async ({ username, password, firstName, lastName, address }) => {
    const { data } = await axios.post("/api/users/new", {
      username,
      password,
      firstName,
      lastName,
      address,
    });
    return data;
  }
);

export const allUsersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      //add users to state array
      return action.payload;
    });
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.push(action.payload);
    });
  },
});

/**
 * selector function that allows us to access state by dispatching an action to the store
 * @param {[]} state user array
 * @returns the users stored in state
 */
export const selectUsers = (state) => state.users;

export default allUsersSlice.reducer;
