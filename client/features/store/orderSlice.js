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
  "fetchOrderItems",
  async (orderInfo) => {
    try {
      const { data } = await axios.post(`/api/cart/${orderInfo.id}`, orderInfo);
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

// edit order items for a logged in user
export const editOrderItems = createAsyncThunk(
  "fetchOrderItems",
  async (orderInfo) => {
    try {
      const { data } = await axios.put(`/api/cart/${orderInfo.id}`, orderInfo);
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
      return payload;
    });
    builder.addCase(editOrderItems.fulfilled, (state, { payload }) => {
      return payload;
    });
  },
});

export const selectOrder = (state) => state.order;

export default orderSlice.reducer;
