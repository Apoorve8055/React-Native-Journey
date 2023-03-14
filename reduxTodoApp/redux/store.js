import {configureStore} from '@reduxjs/toolkit';
import rootTodoReducer from './todoSlice';

export const store = configureStore({
  reducer: {
    todo: rootTodoReducer,
  },
});
