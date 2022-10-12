export const EducationItem = ({ educationTitle, educationSubtitle }) => {
  return (
    <>
      <span className="fa-li">
        <i className="fa-solid fa-book-open "></i>
      </span>
      <span className="education-title">{educationTitle}</span>
      <span className="education-subtitle">{educationSubtitle}</span>
    </>
  );
};
