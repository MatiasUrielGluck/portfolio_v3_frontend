import "./deletewindow.css";

export const DeleteWindow = ({setDeleteWindow}) => {
  const onCloseWindow = () => {
    setDeleteWindow(false);
  };

  return (
    <div className="delete-window">
      <div className="window-container">
        <h2>Are you sure you want to delete this skill?</h2>
        <div className="actions-container">
          <div className="btn" onClick={onCloseWindow}>
            No
          </div>
          <div className="btn">Yes</div>
        </div>
      </div>
    </div>
  );
};
