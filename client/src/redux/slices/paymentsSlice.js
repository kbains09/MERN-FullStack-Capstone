import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Base URL for API endpoints - adjust as needed
const BASE_URL = 'http://localhost:8080/payment-details';

// Async thunk for creating a new payment detail and posting to API
export const createPaymentDetail = createAsyncThunk(
  'paymentDetails/create',
  async (paymentData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}`, paymentData);
      return response.data; 
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk for fetching payment detail by ID
// Functionality not yet implemented for frontend
export const fetchPaymentDetailById = createAsyncThunk(
  'paymentDetails/fetchById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk for updating a payment detail
export const updatePaymentDetail = createAsyncThunk(
  'paymentDetails/update',
  async ({ id, updateData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${BASE_URL}/${id}`, updateData);
      return { id, ...response.data };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk for deleting a payment detail
export const deletePaymentDetail = createAsyncThunk(
  'paymentDetails/delete',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${BASE_URL}/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  details: [],
  status: 'idle',
  error: null,
};

const paymentDetailsSlice = createSlice({
  name: 'paymentDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createPaymentDetail.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createPaymentDetail.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.details.push(action.payload);
      })
      .addCase(createPaymentDetail.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload ? action.payload : action.error.message;
      })
      .addCase(fetchPaymentDetailById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.details = [action.payload];
      })
      .addCase(updatePaymentDetail.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const index = state.details.findIndex(detail => detail.id === action.payload.id);
        if (index !== -1) {
          state.details[index] = action.payload;
        }
      })
      .addCase(deletePaymentDetail.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.details = state.details.filter(detail => detail.id !== action.payload);
      });
  },
});

export default paymentDetailsSlice.reducer;
