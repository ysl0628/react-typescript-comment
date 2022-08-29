import { configureStore } from "@reduxjs/toolkit";
import commentReducer from "./reducers/commentSlice";

const store = configureStore({
  reducer: {
    comment: commentReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
