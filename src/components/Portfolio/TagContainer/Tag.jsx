export const Tag = ({ name }) => {
  const toggleTag = () => {
    console.log(`TAG ${name} PRESSED`)
  }

  return (
    <div className="tag" onClick={toggleTag}>
      <p>{name}</p>
    </div>
  );
};
