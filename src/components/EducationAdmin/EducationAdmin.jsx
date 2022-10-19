import { createContext, useState } from "react";
import { useEducation } from "../../hooks";
import { DeleteWindow } from "../DeleteWindow";
import { Navbar } from "../Navbar";
import { CreateEducationWindow } from "./CreateEducationWindow/CreateEducationWindow";
import { EditEducationWindow } from "./EditEducationWindow/EditEducationWindow";
import { Education } from "./Education";
import "./educationadmin.css";

export const EducationAdmin = () => {
  const [deleteWindow, setDeleteWindow] = useState(false);
  const [toDeleteEducationId, setToDeleteEducationId] = useState(-1);

  const [createWindow, setCreateWindow] = useState(false);

  const [editWindow, setEditWindow] = useState(false);
  const [toEditEducationId, setToEditEducationId] = useState(-1);
  const [educationInfo, setEducationInfo] = useState({});

  const { educationList } = useEducation([
    deleteWindow,
    createWindow,
    editWindow,
  ]);

  const educationValues = {
    setDeleteWindow,
    setToDeleteEducationId,
    toDeleteId: toDeleteEducationId,
    endpoint: "education",

    createWindow,
    setCreateWindow,

    editWindow,
    setEditWindow,
    setToEditEducationId,
    toEditEducationId,
    educationInfo,
    setEducationInfo,
  };

  const EducationContext = createContext();

  const onCreate = () => {
    setCreateWindow(true);
  };

  return (
    <EducationContext.Provider value={educationValues}>
      {deleteWindow ? <DeleteWindow Context={EducationContext} /> : null}
      {createWindow ? (
        <CreateEducationWindow Context={EducationContext} />
      ) : null}

      {editWindow ? <EditEducationWindow Context={EducationContext} /> : null}

      <div className="education-admin">
        <Navbar />
        <div className="content-container">
          <h2>Education Administrator</h2>

          <div className="add-btn btn" onClick={onCreate}>
            Add education
          </div>

          <div className="education-container">
            {educationList.map((education) => (
              <Education
                Context={EducationContext}
                id={education.id}
                title={education.title}
                subtitle={education.subtitle}
                key={education.id}
              />
            ))}
          </div>
        </div>
      </div>
    </EducationContext.Provider>
  );
};
