import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../store/slices/uiSlice";
import "./hambmenu.css";

export const HambMenu = () => {
  const dispatch = useDispatch();
  const { sidebarExpanded } = useSelector((state) => state.ui);

  const onExpandBtn = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div className="content-hamb-menu" onClick={onExpandBtn}>
      <i className={`fa-solid fa-bars fa-2x hamb-menu ${sidebarExpanded ? 'hamb-hidden' : null}`}></i>
    </div>
  );
};
