import { AdminSkillsContainer, DeleteWindow } from "../";
import { Navbar } from "../Navbar";
import "./skillsadmin.css";

import { frontSkillList, backSkillList } from "../../data/tempSkills";
import { useState } from "react";

export const SkillsAdmin = () => {
  const [deleteWindow, setDeleteWindow] = useState(false);

  return (
    <>
      {deleteWindow ? <DeleteWindow setDeleteWindow={setDeleteWindow} /> : null}

      <div className="skills-admin">
        <Navbar />
        <div className="content-container">
          <h2>Skills Administrator</h2>
          <div className="skills-panel-container">
            <AdminSkillsContainer
              skillsCategory="Frontend"
              skillList={frontSkillList}
              setDeleteWindow={setDeleteWindow}
            />
            <AdminSkillsContainer
              skillsCategory="Backend"
              skillList={frontSkillList}
              setDeleteWindow={setDeleteWindow}
            />
          </div>
        </div>
      </div>
    </>
  );
};
