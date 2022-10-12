import { HambMenu, ProfileContainer, SkillsContainer, EducationContainer } from "../";
import "./content.css";

import { frontSkillList, backSkillList } from '../../data/tempSkills' // *1 TEMP

export const Content = () => {
  return (
    <div className="content">
      <HambMenu />
      <ProfileContainer />
      <div className="grid-container">
        <SkillsContainer skillsCategory="Frontend" skillList={frontSkillList}/> {/* TODO: 1* */}
        <SkillsContainer skillsCategory="Backend" skillList={backSkillList}/> {/* TODO: 1* */}
        
        <EducationContainer />

        {/* HobbiesContainer */}

        {/* ExperienceContainer */}

      </div>
      {/* Portfolio */}

      {/* ContactContainer */}
    </div>
  );
};
