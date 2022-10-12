import "./experiencecontainer.css";

export const ExperienceContainer = () => {
  return (
    <div className="experience-container container">
      <h2 className="title">Experience</h2>

      <p>Hardware and Software Technician</p>
      <p>Independent, since 2018</p>

      <ul className="fa-ul">
        <li>
          <span className="fa-li">
            <i className="fa-brands fa-windows"></i>
          </span>
          Operating systems and programs installation.
        </li>
        <li>
          <span className="fa-li">
            <i className="fa-solid fa-stethoscope"></i>
          </span>
          Computers and cell phones reparation.
        </li>
        <li>
          <span className="fa-li">
            <i className="fa-regular fa-hard-drive"></i>
          </span>
          Data recovery using Linux.
        </li>
      </ul>

      <div className="contact-btn"><a href="mailto:matiasugluck@gmail.com" target="_blanck">Contact me</a></div>
    </div>
  );
};
