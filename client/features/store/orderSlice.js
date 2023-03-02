import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// get order items for a logged in user
export const fetchOrderItems = createAsyncThunk(
  "fetchOrderItems",
  async (id) => {
    try {
      const { data } = await axios.get(`/api/cart/${id}`);
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

// add order items for a logged in user
export const addOrderItems = createAsyncThunk(
  "addOrderItems",
  async (orderInfo) => {
    try {
      const { data } = await axios.post(`/api/cart/${orderInfo.id}`, orderInfo);
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const orderSlice = createSlice({
  name: "order",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOrderItems.fulfilled, (state, { payload }) => {
      return payload;
    });
    builder.addCase(addOrderItems.fulfilled, (state, { payload }) => {
      state.push(payload);
    });
  },
});

export const selectOrder = (state) => state.order;

export default orderSlice.reducer;
