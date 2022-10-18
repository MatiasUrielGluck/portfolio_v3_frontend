import { useSelector } from "react-redux";

import {
  HambMenu,
  ProfileContainer,
  SkillsContainer,
  EducationContainer,
  ExperienceContainer,
  HobbiesContainer,
  Porfolio,
  ContactContainer,
} from "../";

import "./content.css";
import { useSkills } from "../../hooks";

export const Content = () => {
  const { sidebarExpanded } = useSelector((state) => state.ui);
  const { frontSkillList, backSkillList } = useSkills();

  return (
    <div className={`content ${sidebarExpanded ? "compact" : null}`}>
      <HambMenu />
      <ProfileContainer />
      <div className="grid-container">
        <SkillsContainer skillsCategory="Frontend" skillList={frontSkillList} />
        <SkillsContainer skillsCategory="Backend" skillList={backSkillList} />
        <EducationContainer />
        <ExperienceContainer />
        <HobbiesContainer />
      </div>
      <Porfolio />

      <ContactContainer />
    </div>
  );
};
