import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './slices/productsSlice';
import usersSlice from './slices/usersSlice';
import ordersSlice from './slices/ordersSlice';
import paymentsSlice from './slices/paymentsSlice';
import cartSlice from './slices/cartSlice';

export const store = configureStore({
  reducer: {
    products: productsSlice,
    users: usersSlice,
    orders: ordersSlice,
    payments: paymentsSlice,
    cart: cartSlice,

  },
});
