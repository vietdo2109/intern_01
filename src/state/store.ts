import { configureStore } from '@reduxjs/toolkit';
import modalTypeReducer from './modal/modalTypeSlice';
import todosReducer from './todo/todoSlice';
import { todosApiSlice } from './todos/todosApiSlice';

export const store = configureStore({
  reducer: {
    modalType: modalTypeReducer,
    todos: todosReducer,
    [todosApiSlice.reducerPath]: todosApiSlice.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todosApiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
