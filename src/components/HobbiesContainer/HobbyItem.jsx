export const HobbyItem = ({ img, name, desc }) => {
  console.log(document.getElementById("hobbyDesc"))

  return (
    <div className="hobby-item">
      <img src={img} alt="Matías Uriel Gluck Piano" />
      <p>{name}</p>
      <span id="hobbyDesc"></span>
    </div>
  );
};
