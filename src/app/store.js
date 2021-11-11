import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/Login/loginSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
