import { useContext } from "react";
import publicApi from "../../../api/publicApi";
import { useForm } from "../../../hooks";
import "./createprojectwindow.css";

export const CreateProjectWindow = ({ Context }) => {
  const { setCreateWindow } = useContext(Context);

  const { projectTitle, projectSubtitle, onInputChange } = useForm({
    projectTitle: "",
    projectSubtitle: "",
  });

  const onCloseWindow = () => {
    setCreateWindow(false);
  };

  const onCreate = async (e) => {
    e.preventDefault();

    await publicApi().post("/projects", {
      title: projectTitle,
      subtitle: projectSubtitle,
    });
    onCloseWindow();
  };

  return (
    <div className="create-window">
      <div className="window-container">
        <h2>Create Project</h2>

        <form onSubmit={onCreate}>
          <input
            type="text"
            name="projectTitle"
            placeholder="Title"
            value={projectTitle}
            onChange={onInputChange}
          />
          <input
            type="text"
            name="projectSubtitle"
            placeholder="Description"
            value={projectSubtitle}
            onChange={onInputChange}
          />
        </form>

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
