import { useContext } from "react";

export const AdminSkill = ({
  Context,
  skillId,
  skillName,
  skillIcon,
}) => {
  const { setDeleteWindow, setToDeleteSkillId } = useContext(Context);

  const onDelete = () => {
    setDeleteWindow(true);
    setToDeleteSkillId(skillId); // BUG -1
  };

  return (
    <div className="skill">
      <p>{skillName}</p>
      <i className={skillIcon}></i>
      <div className="actions-container">
        <i className="fa-solid fa-pencil btn"></i>
        <i className="fa-solid fa-trash btn" onClick={onDelete}></i>
      </div>
    </div>
  );
};
