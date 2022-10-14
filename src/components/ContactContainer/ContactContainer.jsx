import "./contactcontainer.css";

export const ContactContainer = () => {
  return (
    <div className="contact-container container">
      <h2 className="title">Contact me</h2>
      <div className="social-container">
        <a href="mailto:matiasugluck@gmail.com" target="_blank">
          <i className="fa-sharp fa-solid fa-envelope fa-3x"></i>
        </a>
        <a href="https://www.linkedin.com/in/mat%C3%ADas-uriel-gluck?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B1W0DyPbpQayzqK6h9OmqMQ%3D%3D" target="_blank">
          <i className="fa-brands fa-linkedin fa-3x"></i>
        </a>
        <a href="https://github.com/MatiasUrielGluck" target="_blank">
          <i className="fa-brands fa-square-github fa-3x"></i>
        </a>
        <a href="https://www.instagram.com/matias_uriel_gluck/" target="_blank">
          <i className="fa-brands fa-square-instagram fa-3x"></i>
        </a>
      </div>
    </div>
  );
};
