import "./createskillwindow.css";

export const CreateSkillsWindow = () => {
  const onCloseWindow = () => {};

  const onCreate = async () => {};

  return (
    <div className="create-window">
      <div className="window-container">
        <h2>Create skill</h2>
        <div className="actions-container">
          <div className="btn" onClick={onCloseWindow}>
            Cancel
          </div>
          <div className="btn" onClick={onCreate}>
            Create
          </div>
        </div>
      </div>
    </div>
  );
};
