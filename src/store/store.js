import { configureStore } from "@reduxjs/toolkit";
import { authSlice, uiSlice } from "./slices";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    ui: uiSlice.reducer,
  },
});
