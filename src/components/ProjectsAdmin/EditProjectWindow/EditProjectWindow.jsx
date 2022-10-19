import { useContext } from "react";
import publicApi from "../../../api/publicApi";
import { useForm } from "../../../hooks";
import "./editprojectwindow.css";

export const EditProjectWindow = ({ Context }) => {
  const { setEditWindow, projectInfo, toEditProjectId } = useContext(Context);

  const { projectTitle, projectSubtitle, onInputChange } = useForm({
    projectTitle: projectInfo.title,
    projectSubtitle: projectInfo.subtitle,
  });

  const onCloseWindow = () => {
    setEditWindow(false);
  };

  const onEdit = async (e) => {
    e.preventDefault();

    try {
      await publicApi().patch("/projects/" + toEditProjectId, {
        title: projectTitle,
        subtitle: projectSubtitle,
      });
    } catch (error) {
      console.log(error.response.data);
    }

    onCloseWindow();
  };

  return (
    <div className="create-window">
      <div className="window-container">
        <h2>Edit Project</h2>

        <form onSubmit={onEdit}>
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
          <div className="btn" onClick={onEdit}>
            Save
          </div>
        </div>
      </div>
    </div>
  );
};
