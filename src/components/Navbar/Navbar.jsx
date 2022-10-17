import { NavLink } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
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
        <NavLink to="/logout">
          <li>Logout</li>
        </NavLink>
      </ul>
    </div>
  );
};
