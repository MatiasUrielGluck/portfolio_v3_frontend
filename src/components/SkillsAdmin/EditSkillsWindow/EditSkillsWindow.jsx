import { useContext } from "react";
import publicApi from "../../../api/publicApi";
import { useForm } from "../../../hooks";
import "./editskillwindow.css";

export const EditSkillsWindow = ({ Context }) => {
  const { setEditWindow, skillInfo, toEditSkillId } = useContext(Context);

  const { skillName, skillIcon, onInputChange } = useForm({
    skillName: skillInfo.skillName,
    skillIcon: skillInfo.skillIcon,
  });

  const onCloseWindow = () => {
    setEditWindow(false);
  };

  const onEdit = async (e) => {
    e.preventDefault();

    try {
      await publicApi().patch("/skills/" + toEditSkillId, {
        name: skillName,
        icon: skillIcon,
      });
    } catch (error) {
      console.log(error.response.data);
    }

    onCloseWindow();
  };

  return (
    <div className="create-window">
      <div className="window-container">
        <h2>Edit Skill</h2>

        <form onSubmit={onEdit}>
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
          <div className="btn" onClick={onEdit}>
            Save
          </div>
        </div>
      </div>
    </div>
  );
};
