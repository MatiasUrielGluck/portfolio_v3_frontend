export const AdminSkill = ({ skillName, skillIcon }) => {
  return (
    <div className="skill">
      <p>{skillName}</p>
      <i className={skillIcon}></i>
      <div className="actions-container">
        <i className="fa-solid fa-pencil btn"></i>
        <i className="fa-solid fa-trash btn"></i>
      </div>
    </div>
  );
};
