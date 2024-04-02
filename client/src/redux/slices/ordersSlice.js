import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

// Async thunk for fetching all orders for a user
export const fetchOrders = createAsyncThunk(
  'orders/fetchOrders',
  async (userId, { rejectWithValue }) => {
    try {
      // Endpoint not active in backend yet
      const response = await axios.get(`${BASE_URL}/orders/user/${userId}`);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

// Async thunk for fetching a single order by ID
export const fetchOrderById = createAsyncThunk(
  'orders/fetchOrderById',
  async (orderId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/orders/${orderId}`);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

// Async thunk for placing a new order
export const placeOrder = createAsyncThunk(
  'orders/placeOrder',
  async (orderData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/orders`, orderData);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

// Async thunk for updating an order
export const updateOrder = createAsyncThunk(
  'orders/updateOrder',
  async ({ orderId, updateData }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`${BASE_URL}/orders/${orderId}`, updateData);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

// Async thunk for deleting an order
// Functionality for deleting an order is not going to be implemented in the frontend
export const deleteOrder = createAsyncThunk(
  'orders/deleteOrder',
  async (orderId, { rejectWithValue }) => {
    try {
      await axios.delete(`${BASE_URL}/orders/${orderId}`);
      return orderId;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

const initialState = {
  orders: [],
  status: 'idle', 
  error: null,
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handling fetchOrders
      .addCase(fetchOrders.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.orders = action.payload;
      })
      // Handling fetchOrderById
      .addCase(fetchOrderById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const index = state.orders.findIndex(order => order.id === action.payload.id);
        if (index !== -1) {
          state.orders[index] = action.payload;
        } else {
          state.orders.push(action.payload);
        }
      })
      // Handling placeOrder
      .addCase(placeOrder.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(placeOrder.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.orders.push(action.payload);
      })
      // Handling updateOrder
      .addCase(updateOrder.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const index = state.orders.findIndex(order => order.id === action.payload.id);
        if (index !== -1) {
          state.orders[index] = { ...state.orders[index], ...action.payload };
        }
      })
      // Handling deleteOrder
      .addCase(deleteOrder.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.orders = state.orders.filter(order => order.id !== action.payload);
      })
      // Generic error handling for all actions
      .addMatcher(
        action => action.type.endsWith('rejected'),
        (state, action) => {
          state.status = 'failed';
          state.error = action.payload ? action.payload : action.error.message;
        }
      );
  },
});

export default ordersSlice.reducer;
