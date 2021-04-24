import { configureStore } from '@reduxjs/toolkit';
import mailReducer from './reducers/mailSlice';

export const store = configureStore({
  reducer: {
    mail: mailReducer,
  },
});
