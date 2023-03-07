import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {};

/**
 * async thunk that fetches single user
 * @param {number} user id to request that specific user from the database
 * @returns user data it received from the AJAX request
 * @catches error if database request goes wrong
 */
export const fetchSingleUser = createAsyncThunk("singleUser", async (id) => {
  try {
    const { data } = await axios.get(`/api/users/${id}`);
    return data;
  } catch (err) {
    console.error(err);
  }
});

/**
 * async thunk that updates a single user
 * @param {object} userdata - to update user on backend
 * @returns user data it received from the AJAX request
 * @catches error if database request goes wrong
 */
export const editUser = createAsyncThunk(
  "users/editUser",
  async ({ id, username, password, firstName, lastName, address }) => {
    try {
      const { data } = await axios.put(`/api/users/${id}/edit`, {
        username,
        password,
        firstName,
        lastName,
        address,
      });
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

/**
 * async thunk that creates or updates a single user
 * @param {object} userInfo - to update or create user on backend
 * @returns user data it received from the AJAX request
 * @catches error if database request goes wrong
 */
export const createOrUpdateUser = createAsyncThunk(
  "users/createOrUpdateUser",
  async (userInfo) => {
    try {
      const { data } = await axios.put(
        `/api/users/${userInfo.username}`,
        userInfo
      );
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

/**
 * singleUser slice
 * initialState is set as an empty object
 * our async reducers are firing whenever our async thunks fulfill the request
 * all fulfilled requests are being set as the new state
 */
export const singleUserSlice = createSlice({
  name: "singleUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleUser.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(editUser.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(createOrUpdateUser.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

/**
 * selector function that allows us to access state by dispatching an action to the store
 * @param {object} state user object
 * @returns the user stored in state
 */
export const selectSingleUser = (state) => {
  return state.singleUser;
};

export default singleUserSlice.reducer;
