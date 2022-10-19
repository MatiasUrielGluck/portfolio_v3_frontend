import { createContext, useState } from "react";
import { useEducation } from "../../hooks";
import { DeleteWindow } from "../DeleteWindow";
import { Navbar } from "../Navbar";
import { Education } from "./Education";
import "./educationadmin.css";

export const EducationAdmin = () => {
  const [deleteWindow, setDeleteWindow] = useState(false);
  const [toDeleteEducationId, setToDeleteEducationId] = useState(-1);

  const { educationList } = useEducation([deleteWindow]);

  const educationValues = {
    setDeleteWindow,
    setToDeleteEducationId,
    toDeleteId: toDeleteEducationId,
    endpoint: "education",

    // createWindow,
    // setCreateWindow,

    // editWindow,
    // setEditWindow,
    // setToEditEducationId,
    // toEditEducationId,
    // educationInfo,
    // setEducationInfo,
  };

  const EducationContext = createContext();

  return (
    <EducationContext.Provider value={educationValues}>
      {deleteWindow ? <DeleteWindow Context={EducationContext} /> : null}

      <div className="education-admin">
        <Navbar />
        <div className="content-container">
          <h2>Education Administrator</h2>

          <div className="add-btn btn">Add education</div>

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
