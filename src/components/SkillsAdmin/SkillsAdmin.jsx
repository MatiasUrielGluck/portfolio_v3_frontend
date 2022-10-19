import { createContext, useState } from "react";
import { AdminSkillsContainer, DeleteWindow, Navbar } from "../";
import { useSkills } from "../../hooks";
import { CreateSkillsWindow } from "./CreateSkillsWindow/CreateSkillsWindow";
import "./skillsadmin.css";

export const SkillsAdmin = () => {
  const [deleteWindow, setDeleteWindow] = useState(false);

  const [toDeleteSkillId, setToDeleteSkillId] = useState(-1);

  const [createWindow, setCreateWindow] = useState(false);

  const { frontSkillList, backSkillList } = useSkills(deleteWindow);

  const skillsValues = {
    setDeleteWindow,
    setToDeleteSkillId,
    toDeleteId: toDeleteSkillId,
    endpoint: "skills",

    createWindow,
    setCreateWindow,
  };

  const SkillsContext = createContext();

  return (
    <SkillsContext.Provider value={skillsValues}>
      {deleteWindow ? <DeleteWindow Context={SkillsContext} /> : null}

      {createWindow ? <CreateSkillsWindow /> : null}

      <div className="skills-admin">
        <Navbar />
        <div className="content-container">
          <h2>Skills Administrator</h2>
          <div className="skills-panel-container">
            <AdminSkillsContainer
              Context={SkillsContext}
              skillsCategory="Frontend"
              skillList={frontSkillList}
            />
            <AdminSkillsContainer
              Context={SkillsContext}
              skillsCategory="Backend"
              skillList={backSkillList}
            />
          </div>
        </div>
      </div>
    </SkillsContext.Provider>
  );
};
