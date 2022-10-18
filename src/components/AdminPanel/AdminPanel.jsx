import { Navbar, AdminContainer } from "../";
import "./adminpanel.css";

export const AdminPanel = () => {
  return (
    <div className="admin-panel">
      <Navbar />
      <div className="content-container">
        <AdminContainer />
      </div>
    </div>
  );
};
