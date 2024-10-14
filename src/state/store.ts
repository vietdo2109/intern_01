import { configureStore } from "@reduxjs/toolkit";
import modalTypeReducer from "./modal/ModalTypeSlice";
import todosReducer from "./todo/TodoSlice";
import { todosApiSlice } from "./posts/todosApiSlice";

export const store = configureStore({
  reducer: {
    modalType: modalTypeReducer,
    todos: todosReducer,
    [todosApiSlice.reducerPath]: todosApiSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
