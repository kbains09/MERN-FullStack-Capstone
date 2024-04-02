import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

// Async thunk for user login
export const loginUser = createAsyncThunk(
  'users/loginUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/users`, userData);
      localStorage.setItem('userToken', response.data.token);
      return response.data; //Payload
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

// Initial state
const initialState = {
  user: null,
  status: 'idle', 
  error: null,
};



// Users slice
const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // Reducer for logging out
    logoutUser: (state) => {
      localStorage.removeItem('userToken'); // Clear the token from localStorage
      state.user = null;
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload ? action.payload : action.error.message;
      });
  },
});

export const { logoutUser } = usersSlice.actions;

export default usersSlice.reducer;
