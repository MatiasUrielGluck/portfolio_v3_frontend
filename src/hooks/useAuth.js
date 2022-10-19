import { useEffect } from "react";
import { useDispatch } from "react-redux";

import authApi from "../api/authApi";
import { setUser, logout, startCheckingAuth } from "../store/slices/authSlice";

export const useAuth = () => {
  const dispatch = useDispatch();

  const validateToken = async () => {
    dispatch(startCheckingAuth());

    const token = localStorage.getItem("token");
    if (token) {
      const resp = await authApi().post("/validatetoken", {
        token,
      });

      const respData = await resp.data;
      const data = await respData.data;

      if (respData.status === "success") {
        dispatch(setUser({ username: data.username, token }));
        
      } else {
        dispatch(logout());
      }
    } else {
      dispatch(logout());
    }
  };

  useEffect(() => {
    validateToken();
  }, []);

  return {};
};
