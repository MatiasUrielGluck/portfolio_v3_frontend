import "./admincontainer.css";

export const AdminContainer = () => {
  return (
    <div className="admin-container">
      <div className="panel">
        <h2>Skills Editor</h2>
        <i className="fa-sharp fa-solid fa-wand-magic-sparkles fa-2x"></i>
      </div>
      <div className="panel">
        <h2>Education editor</h2>
        <i className="fa-solid fa-book-open fa-2x"></i>
      </div>
      <div className="panel">
        <h2>Projects editor</h2>
        <i className="fa-solid fa-diagram-project fa-2x"></i>
      </div>
    </div>
  );
};
