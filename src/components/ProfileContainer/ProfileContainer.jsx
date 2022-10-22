import "./profilecontainer.css";

export const ProfileContainer = () => {
  return (
    <div className="profile-container container" id="about">
      <div className="image-container">
        <img src="/static/images/perfil.jpg" alt="Matías Uriel Gluck" />
      </div>
      <div className="text-container">
        <div className="info-container">
          <h2 className="title">Matías Uriel Gluck</h2>
          <a href="mailto:matiasugluck@gmail.com">
            <i className="fa-solid fa-envelope"></i>matiasugluck@gmail.com
          </a>
          <p>Full stack web developer</p>
        </div>
        <div className="desc-container">
          <p>
            I am a software engenieering student with an entrepreneurial spirit.
            Organized, responsible and well predisposed for teamwork. I took
            courses and projects in the area of web development. I am looking
            for my first job in the field, excited to gain experience and
            further knowledge.
          </p>
        </div>
      </div>
    </div>
  );
};
