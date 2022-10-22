import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebarExpanded: window.innerWidth > 1199 ? true : false ,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarExpanded = !state.sidebarExpanded;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleSidebar } = uiSlice.actions;
