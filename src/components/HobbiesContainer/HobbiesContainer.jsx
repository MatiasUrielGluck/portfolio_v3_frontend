import "./hobbiescontainer.css";
import pianoImage from "../../assets/piano.png";
import runningImage from "../../assets/running.jpg";

export const HobbiesContainer = () => {
  return (
    <div className="hobbies-container container" id="hobbies">
      <h2 className="title">Hobbies</h2>

      <div className="hobby-item">
        <div className="image-container">
          <img src={pianoImage} alt="Matías Uriel Gluck Piano" />
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
          <img src={runningImage} alt="Matías Uriel Gluck running" />
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
