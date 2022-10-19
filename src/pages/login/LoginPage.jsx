import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { useAuth, useForm } from "../../hooks";
import { setUser } from "../../store/slices/authSlice/authSlice";
import authApi from "../../api/authApi";
import "./login.css";

export const LoginPage = () => {
  useAuth();

  const dispatch = useDispatch();
  const { authenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const [loginError, setLoginError] = useState(false);

  const { onInputChange, username, password } = useForm({
    username: "",
    password: "",
  });

  const onFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const resp = await authApi().post("/login", {
        username,
        password,
      });

      const raw = await resp.data;
      const user = await raw.data;

      const payload = { user: user.username, token: user.token };
      dispatch(setUser(payload));

      setLoginError(false);
      navigate("/admin");
    } catch (error) {
      setLoginError(true);
    }
  };

  return (
    <>
      {!authenticated ? (
        <div className="login-container">
          <div className="login-subcontainer">
            <h2>Admin Login</h2>
            <form onSubmit={onFormSubmit}>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                value={username}
                onChange={onInputChange}
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={onInputChange}
              />
              <p className={`errorMsg ${loginError ? "" : "hidden"}`}>
                Username or password incorrect
              </p>
              <button type="submit">Login</button>
            </form>
            <NavLink to="/">Back to homepage</NavLink>
          </div>
        </div>
      ) : (
        <Navigate to="/admin" />
      )}
    </>
  );
};
