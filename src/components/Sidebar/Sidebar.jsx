import { NavLink, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../store/slices/uiSlice";

import "./sidebar.css";
import { useEffect } from "react";
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

  const onScroll = (view) => {
    document.getElementById(view).scrollIntoView({
      behavior: "smooth",
    });
    if (window.innerWidth < 1200) {
      onExpandBtn();
    }
  };
  

  return (
    <div className={`sidebar ${sidebarExpanded ? "expanded" : null}`}>
      <i
        className="fa-solid fa-xmark fa-2x hamb-menu"
        onClick={onExpandBtn}
      ></i>
      <h3 onClick={() => onScroll("about")}>About me</h3>
      <h3 onClick={() => onScroll("skills")}>Skills</h3>
      <h3 onClick={() => onScroll("education")}>Education</h3>
      <h3 onClick={() => onScroll("experience")}>Experience</h3>
      <h3 onClick={() => onScroll("hobbies")}>Hobbies</h3>
      <h3 onClick={() => onScroll("portfolio")}>Portfolio</h3>
      <h3 onClick={() => onScroll("contact")}>Contact</h3>
      <h3><a href={`${import.meta.env.VITE_DOWNLOADS_BASE_URL}/CV.pdf`}>Download CV</a></h3>
      <h3 onClick={onLoginBtn}>Login</h3>
    </div>
  );
};
