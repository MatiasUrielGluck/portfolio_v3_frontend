import { useDispatch } from "react-redux";

import { HambMenu, ProfileContainer } from "../";
import "./content.css";

export const Content = () => {
  return (
    <div className="content">
      <HambMenu />
      <ProfileContainer />
    </div>
  );
};
