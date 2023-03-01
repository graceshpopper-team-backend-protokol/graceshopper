import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// get order items for a logged in user
export const fetchOrderItems = createAsyncThunk(
  "fetchOrderItems",
  async (id) => {
    try {
      const { data } = await axios.get(`/api/users/${id}/cart`);
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

// remove, add or edit order item for a logged in user
export const updateOrderItem = createAsyncThunk(
  "updateOrderItem",
  async (orderInfo) => {
    try {
      const { data } = await axios.put(
        `/api/users/${orderInfo.id}/cart`,
        orderInfo
      );
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

// clear order items from cart for a logged in user
export const clearOrderItems = createAsyncThunk(
  "clearOrderItems",
  async (id) => {
    try {
      const { data } = await axios.delete(`/api/users/${id}/cart`);
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
    builder.addCase(fetchCartItems.fulfilled, (state, { payload }) => {
      return payload;
    });
    builder.addCase(updateOrderItem.fulfilled, (state, { payload }) => {
      return payload;
    });
    builder.addCase(clearOrderItems.fulfilled, (state, { payload }) => {
      return [];
    });
  },
});

export const selectOrder = (state) => state.order;

export default orderSlice.reducer;
