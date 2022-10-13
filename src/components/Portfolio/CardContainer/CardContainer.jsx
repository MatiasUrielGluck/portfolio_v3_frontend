import { Card } from "../Card/Card";
import "./cardcontainer.css";

export const CardContainer = ({ projectList, cardsPerPage }) => {
  // DEBE RECIBIR SOLO LA LISTA A RENDERIZAR
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
          img={project.img}
          name={project.name}
          desc={project.desc}
          tagList={project.tagList}
          key={project.id}
        />
      ))}
    </div>
  );
};
