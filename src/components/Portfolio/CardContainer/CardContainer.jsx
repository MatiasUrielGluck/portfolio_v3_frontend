import { Card } from "../Card/Card";
import "./cardcontainer.css";

export const CardContainer = ({ projectList, cardsPerPage }) => {
  const getLayoutSize = () => {
    if (cardsPerPage === 3) {
      return "big";
    } else if (cardsPerPage === 2) {
      return "medium";
    } else {
      return "small";
    }
  };

  return (
    <div className={`card-container ${getLayoutSize()}`}>
      {projectList.map((project) => (
        <Card
          img={project.imageURL}
          name={project.name}
          desc={project.description}
          tagList={project.Tags}
          key={project.id}
        />
      ))}
    </div>
  );
};
