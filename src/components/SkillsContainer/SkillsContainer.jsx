import { Skill } from "./Skill";
import "./skillscontainer.css";

export const SkillsContainer = ({ skillsCategory, skillList }) => {
  return (
    <div className="skills-container container" id="skills">
      <h2 className="title">{skillsCategory} Skills</h2>
      <div className="skills-group">
        {skillList.map(skill => (
            <Skill skillName={skill.name} skillIcon={skill.icon} key={skill.name}/>
        ))}
      </div>
    </div>
  );
};
