import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../../store/slices/authSlice/authSlice";
import "./navbar.css";

export const Navbar = () => {
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="navbar">
      <ul>
        <NavLink to="/admin">
          <li>Admin Panel</li>
        </NavLink>
      </ul>
      <ul>
        <NavLink to="/">
          <li>Homepage</li>
        </NavLink>
        <li onClick={onLogout}>Logout</li>
      </ul>
    </div>
  );
};
