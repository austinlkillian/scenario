import { configureStore } from '@reduxjs/toolkit'
import homeReducer from './slices/homeSlice';
import formReducer from './slices/formSlice';

export const store = configureStore({
  reducer: {
    home: homeReducer,
    form: formReducer,
  }
})