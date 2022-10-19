import { NavLink, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../store/slices/uiSlice";

import "./sidebar.css";

export const Sidebar = () => {
  const dispatch = useDispatch();
  const { sidebarExpanded } = useSelector((state) => state.ui);
  const navigate = useNavigate();

  const onExpandBtn = () => {
    dispatch(toggleSidebar());
  };

  const onLoginBtn = () => {
    onExpandBtn();
    navigate("/login");
  };

  return (
    <div className={`sidebar ${sidebarExpanded ? "expanded" : null}`}>
      <i
        className="fa-solid fa-xmark fa-2x hamb-menu"
        onClick={onExpandBtn}
      ></i>
      <h3>About me</h3>
      <h3>Skills</h3>
      <h3>Education</h3>
      <h3>Experience</h3>
      <h3>Hobbies</h3>
      <h3>Portfolio</h3>
      <h3>Contact</h3>
      <h3 onClick={onLoginBtn}>Login</h3>
    </div>
  );
};
