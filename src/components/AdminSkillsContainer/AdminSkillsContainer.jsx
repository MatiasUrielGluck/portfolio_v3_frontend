import { useContext } from "react";
import { AdminSkill } from "./AdminSkill";
import "./skillscontainer.css";

export const AdminSkillsContainer = ({ Context, skillsCategory, skillList }) => {
  const { setCreateWindow, setCreateCategory } = useContext(Context)
  
  const onCreate = () => {
    setCreateWindow(true);
    setCreateCategory(skillsCategory);
  };
  
  return (
    <div className="skills-container container">
      <h2 className="title">{skillsCategory} Skills <i className="fa-solid fa-circle-plus add-btn btn" onClick={onCreate}></i></h2>
      <div className="skills-group">
        {skillList.map(skill => (
            <AdminSkill Context={Context} skillId={skill.id} skillName={skill.name} skillIcon={skill.icon} key={skill.name}/>
        ))}
      </div>
    </div>
  );
};
