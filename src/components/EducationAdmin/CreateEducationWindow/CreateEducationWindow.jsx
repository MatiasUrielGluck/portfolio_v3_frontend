import { useContext } from "react";
import publicApi from "../../../api/publicApi";
import { useForm } from "../../../hooks";
import "./createeducationwindow.css";

export const CreateEducationWindow = ({ Context }) => {
  const { setCreateWindow } = useContext(Context);

  const { educationTitle, educationSubtitle, onInputChange } = useForm({
    educationTitle: "",
    educationSubtitle: "",
  });

  const onCloseWindow = () => {
    setCreateWindow(false);
  };

  const onCreate = async (e) => {
    e.preventDefault();

    await publicApi().post("/education", {
      title: educationTitle,
      subtitle: educationSubtitle,
    });
    onCloseWindow();
  };

  return (
    <div className="create-window">
      <div className="window-container">
        <h2>Create Education</h2>

        <form onSubmit={onCreate}>
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
          <div className="btn" onClick={onCreate}>
            Create
          </div>
        </div>
      </div>
    </div>
  );
};
