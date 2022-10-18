import { AdminSkill } from "./AdminSkill";
import "./skillscontainer.css";

export const AdminSkillsContainer = ({ skillsCategory, skillList }) => {
  return (
    <div className="skills-container container">
      <h2 className="title">{skillsCategory} Skills <i className="fa-solid fa-circle-plus add-btn btn"></i></h2>
      <div className="skills-group">
        {skillList.map(skill => (
            <AdminSkill skillName={skill.name} skillIcon={skill.icon} key={skill.name}/>
        ))}
      </div>
    </div>
  );
};