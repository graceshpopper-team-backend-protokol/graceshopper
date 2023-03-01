import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// get order items for a logged in user
// if user is not logged in fetch elements from local storage, if user is logged in fetch orderItems from database
export const fetchOrderItems = createAsyncThunk(
  "fetchOrderItems",
  async (id) => {
    try {
      if (!id) {
        const guestCartData = localStorage.getItem("cartData");
        return guestCartData;
      } else {
        const { data } = await axios.get(`/api/users/${id}/cart`);
        return data;
      }
    } catch (error) {
      console.error(error);
    }
  }
);

export const orderSlice = createSlice({
  name: "order",
  initialState: [],
  reducers: {},
});

export const selectOrder = (state) => state.order;

export default orderSlice.reducer;
