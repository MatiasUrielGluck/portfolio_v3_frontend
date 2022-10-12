import "./educationcontainer.css";

import { educationList } from "../../data/tempEducation"; // TEMP *2
import { EducationItem } from "./EducationItem";

export const EducationContainer = () => {
  return (
    <div className="education-container container">
      <h2 className="title">Education</h2>
      <ul className="fa-ul">
        {educationList.map((educationItem) => (
          <li key={educationItem.id}>
            <EducationItem
              educationTitle={educationItem.title}
              educationSubtitle={educationItem.subtitle}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
