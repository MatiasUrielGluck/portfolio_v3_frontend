import { useContext } from "react";

export const AdminSkill = ({ Context, skillId, skillName, skillIcon }) => {
  const {
    setDeleteWindow,
    setToDeleteSkillId,
    setEditWindow,
    setToEditSkillId,
    toEditSkillId,
    setSkillInfo,
  } = useContext(Context);

  const onDelete = () => {
    setDeleteWindow(true);
    setToDeleteSkillId(skillId);
  };

  const onEdit = () => {
    setEditWindow(true);
    setToEditSkillId(skillId);
    setSkillInfo({ skillName, skillIcon });
  };

  return (
    <div className="skill">
      <p>{skillName}</p>
      <i className={skillIcon}></i>
      <div className="actions-container">
        <i className="fa-solid fa-pencil btn" onClick={onEdit}></i>
        <i className="fa-solid fa-trash btn" onClick={onDelete}></i>
      </div>
    </div>
  );
};
