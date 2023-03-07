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

// edit order items for a logged in user
export const editOrderItems = createAsyncThunk(
  "editOrderItems",
  async (orderInfo) => {
    try {
      const { data } = await axios.put(`/api/cart/${orderInfo.id}`, orderInfo);
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

// deletes order items for a logged in user
export const deleteOrderItems = createAsyncThunk(
  "deleteOrderItems",
  async (id) => {
    try {
      const { data } = await axios.delete(`/api/cart/${id}`);
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

// create order from order items in cart for a logged in user
export const createOrderFromOrderItems = createAsyncThunk(
  "createOrder",
  async (orderInfo) => {
    try {
      const { data } = await axios.put(
        `/api/cart/checkout/${orderInfo.id}`,
        orderInfo
      );
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

// create order from order items in cart for a guest
export const createGuestOrder = createAsyncThunk(
  "createGuestOrder",
  async (orderInfo) => {
    try {
      const { data } = await axios.post(
        `/api/cart/checkout/guestcheckout`,
        orderInfo
      );
      localStorage.clear();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const orderSlice = createSlice({
  name: "order",
  initialState: [],
  reducers: {
    fetchItems(state, { payload }) {
      const localCart = JSON.parse(localStorage.getItem("order"));
      return localCart;
    },
    addItems(state, { payload }) {
      fetchItems();
      //we use findIndex to determine if we already have that item in the cart

      const idx = state?.findIndex(
        (orderItem) => orderItem.puzzleId === payload.puzzleId
      );

      //if it exists, we increment the cart quantity
      if (idx !== -1) {
        const currentOrderQTY = state[idx].orderQTY;
        state[idx].orderQTY =
          Number(currentOrderQTY) + Number(payload.orderQTY);
        localStorage.setItem("order", JSON.stringify(state));
      } else {
        //if it doesn't exist add it to state
        state.push(payload);
        localStorage.setItem("order", JSON.stringify(state));
      }
    },
    editItems(state, { payload }) {
      const idx = state.findIndex(
        (orderItem) => orderItem.puzzleId === payload.puzzleId
      );
      if (Number(payload.orderQTY) === 0) {
        state.splice(idx, 1);
        localStorage.setItem("order", JSON.stringify(state));
      } else {
        state[idx].orderQTY = Number(payload.orderQTY);
        localStorage.setItem("order", JSON.stringify(state));
      }
    },
    clearItems(state, { payload }) {
      localStorage.clear();
      return [];
    },
  },
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
    builder.addCase(deleteOrderItems.fulfilled, (state, { payload }) => {
      return [];
    });
    builder.addCase(
      createOrderFromOrderItems.fulfilled,
      (state, { payload }) => {
        return [];
      }
    );
    builder.addCase(createGuestOrder.fulfilled, (state, { payload }) => {
      return [];
    });
  },
});

export const selectOrder = (state) => state.order;

export const { fetchItems, addItems, editItems, clearItems } =
  orderSlice.actions;

export default orderSlice.reducer;
