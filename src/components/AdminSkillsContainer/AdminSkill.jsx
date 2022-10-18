export const AdminSkill = ({ skillName, skillIcon, setDeleteWindow }) => {
  const onDelete = () => {
    setDeleteWindow(true)
  }

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
