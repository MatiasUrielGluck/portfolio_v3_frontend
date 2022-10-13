import { configureStore } from "@reduxjs/toolkit";
import { authSlice, projectListSlice, uiSlice } from "./slices";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    ui: uiSlice.reducer,
    projectList: projectListSlice.reducer,
  },
});
