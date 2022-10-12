export const Skill = ({ skillName, skillIcon }) => {
  return (
    <div className="skill">
      <p>{skillName}</p>
      <i className={skillIcon}></i>
    </div>
  );
};
