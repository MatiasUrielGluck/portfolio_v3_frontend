import { useContext } from "react";

export const Project = ({
  Context,
  id,
  name,
  description,
  Tags,
  imageURL,
  demoLink,
  codeLink,
}) => {
  const {
    setDeleteWindow,
    setToDeleteProjectId,
    setEditWindow,
    setToEditProjectId,
    setProjectInfo,
    setTagsWindow,
  } = useContext(Context);

  const onEdit = () => {
    setToEditProjectId(id);
    setProjectInfo({
      id,
      name,
      description,
      Tags,
      demoLink,
      codeLink,
    });
    setEditWindow(true);
  };

  const onTags = () => {
    setProjectInfo({
      id,
      Tags,
    });
    setTagsWindow(true);
  };

  const onDelete = () => {
    setToDeleteProjectId(id);
    setDeleteWindow(true);
  };

  return (
    <div className="project container">
      <div className="left-container">
        <p className="project-title">{name}</p>
        <div className="project-tags">
          {Tags.map((tag) => (
            <span key={tag.id}>#{tag.name}</span>
          ))}
        </div>
        <p className="project-subtitle">{description}</p>
        <p className="project-subtitle">
          Image URL:{" "}
          <a href={imageURL} target="_blank">
            {imageURL}
          </a>
        </p>
        <p className="project-subtitle">
          Demo Link:{" "}
          <a href={demoLink} target="_blank">
            {demoLink}
          </a>
        </p>
        <p className="project-subtitle">
          Code Link:{" "}
          <a href={codeLink} target="_blank">
            {codeLink}
          </a>
        </p>
      </div>
      <div className="right-container">
        <i className="fa-solid fa-pencil btn action-btn" onClick={onEdit}></i>
        <i className="fa-solid fa-tag btn action-btn" onClick={onTags}></i>
        <i className="fa-solid fa-trash btn action-btn" onClick={onDelete}></i>
      </div>
    </div>
  );
};
