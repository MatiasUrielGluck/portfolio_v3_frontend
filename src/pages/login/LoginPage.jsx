import { NavLink } from "react-router-dom";
import { useForm } from "../../hooks";
import "./login.css";

export const LoginPage = () => {
  const { onInputChange , username, password } = useForm({
    username: "",
    password: "",
  });

  const onFormSubmit = (e) => {
    e.preventDefault()
    
  }

  return (
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
          <p className="errorMsg hidden">Username or password incorrect</p>
          <button type="submit">Login</button>
        </form>
        <NavLink to="/">Back to homepage</NavLink>
      </div>
    </div>
  );
};
