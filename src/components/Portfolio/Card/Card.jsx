import "./card.css";

export const Card = ({ img, name, desc, tagList, demoLink, codeLink }) => {
  return (
    <div className="card container">
      <div className="image-container">
        <img src={img} alt="matías uriel gluck project" />
      </div>
      <div className="taglist-container">
        {tagList.map((tag) => (
          <span key={tag.id}>#{tag.name}</span>
        ))}
      </div>
      <div className="text-container">
        <div className="name">
          <h2>{name}</h2>
        </div>
        <div className="desc">
          <p>{desc}</p>
        </div>
      </div>
      <div className="action-btns-container">
        <a href={`${demoLink}`} target="_blank" className="btn primary">
          Demo
        </a>
        <a href={`${codeLink}`} target="_blank" className="btn secondary">
          Code
        </a>
      </div>
    </div>
  );
};
