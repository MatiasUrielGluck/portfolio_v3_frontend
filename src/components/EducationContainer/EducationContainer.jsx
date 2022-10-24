import "./educationcontainer.css";

import { EducationItem } from "./EducationItem";
import { useEducation } from "../../hooks";

export const EducationContainer = () => {
  const { educationList } = useEducation([])

  return (
    <div className="education-container container" id="education">
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
