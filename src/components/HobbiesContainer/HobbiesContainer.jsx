import "./hobbiescontainer.css";

export const HobbiesContainer = () => {
  return (
    <div className="hobbies-container container" id="hobbies">
      <h2 className="title">Hobbies</h2>

      <div className="hobby-item">
        <div className="image-container">
          <img src="/static/images/piano.png" alt="Matías Uriel Gluck Piano" />
        </div>
        <p>Piano</p>
        <p>
          I've been playing it since I was 9 years old.{" "}
          <a
            href="https://www.youtube.com/channel/UCKbXB3qWadl9qUKiBF6i8Gw"
            target="_blank"
          >
            Last concert video here
          </a>
        </p>
      </div>

      <div className="hobby-item">
        <div className="image-container">
          <img
            src="/static/images/running.jpg"
            alt="Matías Uriel Gluck running"
          />
        </div>
        <p>Running</p>
        <p>
          One of the best moments of my week is putting on the shoes and going
          for a run.
        </p>
      </div>
    </div>
  );
};
