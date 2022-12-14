import { useContext } from "react";
import publicApi from "../../../api/publicApi";
import { useForm } from "../../../hooks";
import "./createskillwindow.css";

export const CreateSkillsWindow = ({ Context }) => {
  const { setCreateWindow, createCategory } = useContext(Context);

  const { skillName, skillIcon, onInputChange } = useForm({
    skillName: "",
    skillIcon: "",
  });

  const onCloseWindow = () => {
    setCreateWindow(false);
  };

  const onCreate = async (e) => {
    e.preventDefault();

    await publicApi().post("/skills", {
      context: createCategory.toLowerCase(),
      name: skillName,
      icon: skillIcon,
    });
    onCloseWindow();
  };

  return (
    <div className="create-window">
      <div className="window-container">
        <h2>Create {createCategory} Skill</h2>

        <form onSubmit={onCreate}>
          <input
            type="text"
            name="skillName"
            placeholder="Skill name"
            value={skillName}
            onChange={onInputChange}
          />
          <input
            type="text"
            name="skillIcon"
            placeholder="Fontawesome icon class"
            value={skillIcon}
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
