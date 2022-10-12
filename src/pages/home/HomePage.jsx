import { Content } from "../../components/Content/Content";
import { Sidebar } from "../../components/Sidebar/Sidebar";

import "./homepage.css";

export const HomePage = () => {
  return (
    <div className="homepage">
      <Sidebar />
      <Content />
    </div>
  );
};
