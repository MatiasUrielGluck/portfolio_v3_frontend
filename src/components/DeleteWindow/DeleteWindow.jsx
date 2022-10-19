import { useContext } from "react";
import publicApi from "../../api/publicApi";
import "./deletewindow.css";

export const DeleteWindow = ({ Context }) => {
  const { setDeleteWindow, toDeleteId, endpoint } = useContext(Context);

  const onCloseWindow = () => {
    setDeleteWindow(false);
  };

  const onDelete = async () => {
    const resp = await publicApi().delete(`/${endpoint}/` + toDeleteId);
    onCloseWindow();
  };

  return (
    <div className="delete-window">
      <div className="window-container">
        <h2>Are you sure you want to delete this element?</h2>
        <div className="actions-container">
          <div className="btn" onClick={onCloseWindow}>
            No
          </div>
          <div className="btn" onClick={onDelete}>
            Yes
          </div>
        </div>
      </div>
    </div>
  );
};
