import { useNavigate } from "react-router-dom";
import "./admincontainer.css";

export const AdminContainer = () => {
  const navigate = useNavigate();

  const onPanelClick = (path) => {
    navigate(path)
  };

  return (
    <div className="admin-container">
      <div className="panel" onClick={() => onPanelClick("/admin/skills")}>
        <h2>Skills</h2>
        <i className="fa-sharp fa-solid fa-wand-magic-sparkles fa-2x"></i>
      </div>
      <div className="panel" onClick={() => onPanelClick("/admin/education")}>
        <h2>Education</h2>
        <i className="fa-solid fa-book-open fa-2x"></i>
      </div>
      <div className="panel" onClick={() => onPanelClick("/admin/projects")}>
        <h2>Projects</h2>
        <i className="fa-solid fa-diagram-project fa-2x"></i>
      </div>
      <div className="panel" onClick={() => onPanelClick("/admin/order")}>
        <h2>Projects Order</h2>
        <i className="fa-solid fa-sort fa-2x"></i>
      </div>
    </div>
  );
};
