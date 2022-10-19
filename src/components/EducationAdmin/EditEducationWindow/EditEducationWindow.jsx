import { useContext } from "react";
import publicApi from "../../../api/publicApi";
import { useForm } from "../../../hooks";
import "./editeducationwindow.css";

export const EditEducationWindow = ({ Context }) => {
  const { setEditWindow, educationInfo, toEditEducationId } = useContext(Context);

  const { educationTitle, educationSubtitle, onInputChange } = useForm({
    educationTitle: educationInfo.title,
    educationSubtitle: educationInfo.subtitle,
  });

  const onCloseWindow = () => {
    setEditWindow(false);
  };

  const onEdit = async (e) => {
    e.preventDefault();

    try {
      await publicApi().patch("/education/" + toEditEducationId, {
        title: educationTitle,
        subtitle: educationSubtitle,
      });
    } catch (error) {
      console.log(error.response.data);
    }

    onCloseWindow();
  };

  return (
    <div className="create-window">
      <div className="window-container">
        <h2>Edit Education</h2>

        <form onSubmit={onEdit}>
          <input
            type="text"
            name="educationTitle"
            placeholder="Title"
            value={educationTitle}
            onChange={onInputChange}
          />
          <input
            type="text"
            name="educationSubtitle"
            placeholder="Description"
            value={educationSubtitle}
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
