import { configureStore } from '@reduxjs/toolkit';
import mailReducer from './reducers/mailSlice';
import userReducer from './reducers/userSlice';

export const store = configureStore({
  reducer: {
    mail: mailReducer,
    user: userReducer,
  },
});
