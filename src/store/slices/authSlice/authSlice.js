import { createSlice } from "@reduxjs/toolkit";

const userTemplate = {
  username: "jose",
  email: "jose@example.com",
};

const initialState = {
  authenticated: false,
  status: "not-checking-auth", // checking-auth, not-checking-auth
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    startCheckingAuth: (state) => {
      state.status = "checking-auth";
    },

    stopCheckingAuth: (state) => {
      state.status = "not-checking-auth";
    },

    setUser: (state, action) => {
      state.user += action.payload.user;
    },
  },
});

// Action creators are generated for each case reducer function
export const { startCheckingAuth, stopCheckingAuth, setUser } = authSlice.actions;
