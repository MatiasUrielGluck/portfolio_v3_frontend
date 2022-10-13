import {
  HambMenu,
  ProfileContainer,
  SkillsContainer,
  EducationContainer,
  ExperienceContainer,
  HobbiesContainer,
  Porfolio,
} from "../";
import "./content.css";

import { frontSkillList, backSkillList } from "../../data/tempSkills"; // *1 TEMP TODO

export const Content = () => {
  return (
    <div className="content">
      <HambMenu />
      <ProfileContainer />
      <div className="grid-container">
        {/* TODO */}
        <SkillsContainer skillsCategory="Frontend" skillList={frontSkillList} />{" "}
        <SkillsContainer skillsCategory="Backend" skillList={backSkillList} />{" "}
        {/* ---- */}
        
        <EducationContainer />
        <ExperienceContainer />
        <HobbiesContainer />
      </div>
      <Porfolio />

      {/* ContactContainer */}
    </div>
  );
};
