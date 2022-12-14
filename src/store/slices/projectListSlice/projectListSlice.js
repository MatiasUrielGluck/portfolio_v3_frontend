import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tagList: [],
  filteredProjectList: [],
};

export const projectListSlice = createSlice({
  name: "projectList",
  initialState,
  reducers: {
    addTag: (state, action) => {
      state.tagList.push(action.payload);
    },
    removeTag: (state, action) => {
      state.tagList = state.tagList.filter((tag) => tag !== action.payload);
    },

    setProjectList: (state, action) => {
      state.filteredProjectList = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTag, removeTag, setProjectList } = projectListSlice.actions;
