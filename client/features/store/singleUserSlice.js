import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {};

//async thunk communicates with db to get user with matching ID

export const fetchSingleUser = createAsyncThunk("singleUser", async (id) => {
  try {
    const { data } = await axios.get(`/api/users/${id}`);
    return data;
  } catch (err) {
    console.error(err);
  }
});

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
      console.log("After axios put");
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

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

export const selectSingleUser = (state) => {
  return state.singleUser;
};

export default singleUserSlice.reducer;
