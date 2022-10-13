import { useSelector } from "react-redux";

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
  const {sidebarExpanded} = useSelector(state => state.ui)

  return (
    <div className={`content ${sidebarExpanded ? 'compact' : null}`}>
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
