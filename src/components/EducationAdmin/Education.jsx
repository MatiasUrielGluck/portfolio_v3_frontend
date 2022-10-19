import { useContext } from "react";

export const Education = ({ Context, id, title, subtitle }) => {
  const {
    setDeleteWindow,
    setToDeleteEducationId,
    setEditWindow,
    setToEditEducationId,
    setEducationInfo,
  } = useContext(Context);

  const onEdit = () => {
    setToEditEducationId(id);
    setEducationInfo({ title, subtitle });
    setEditWindow(true);
  };

  const onDelete = () => {
    setToDeleteEducationId(id);
    setDeleteWindow(true);
  };

  return (
    <div className="education container">
      <div className="left-container">
        <p className="education-title">{title}</p>
        <p className="education-subtitle">{subtitle}</p>
      </div>
      <div className="right-container">
        <i className="fa-solid fa-pencil btn action-btn" onClick={onEdit}></i>
        <i className="fa-solid fa-trash btn action-btn" onClick={onDelete}></i>
      </div>
    </div>
  );
};
