import "./experiencecontainer.css";
import abbLogo from "../../assets/abb.png";

export const ExperienceContainer = () => {
  return (
    <div className="experience-container container" id="experience">
      <h2 className="title">Experience</h2>

      <div className="experience-item grid-template">
        <div className="left">
          <p>Fullstack Developer Intern</p>
          <p>ABB, since January 2023</p>
        </div>
        <div className="right">
          <img src={abbLogo} alt="" />
        </div>
      </div>

      <div className="experience-item">
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

        <div className="contact-btn">
          <a href="mailto:matiasugluck@gmail.com" target="_blanck">
            Contact me
          </a>
        </div>
      </div>
    </div>
  );
};
