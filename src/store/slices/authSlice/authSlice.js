import { createSlice } from "@reduxjs/toolkit";

const userTemplate = {
  username: "jose",
  token: "abc",
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
      state.user = action.payload;
      state.authenticated = true;
      state.status = "not-checking-auth";
      localStorage.setItem("token", action.payload.token);
    },

    logout: (state) => {
      state = initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { startCheckingAuth, stopCheckingAuth, setUser, logout } =
  authSlice.actions;
