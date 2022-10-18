import { AdminSkillsContainer } from "../";
import { Navbar } from "../Navbar";
import "./skillsadmin.css";

import {frontSkillList, backSkillList} from '../../data/tempSkills'

export const SkillsAdmin = () => {
  return (
    <div className="skills-admin">
      <Navbar />
      <div className="content-container">
        <h2>Skills Administrator</h2>
        <div className="skills-panel-container">
            <AdminSkillsContainer skillsCategory="Frontend" skillList={frontSkillList} />
            <AdminSkillsContainer skillsCategory="Backend" skillList={frontSkillList} />
        </div>
      </div>
    </div>
  );
};
