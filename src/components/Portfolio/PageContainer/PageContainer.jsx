import "./pagecontainer.css";

export const PageContainer = ({ page, setPage, totalPages }) => {
  const changePage = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    setPage(newPage);
  };

  return (
    <div className="page-container">
      <div
        className="back-btn btn"
        onClick={() => {
          changePage(page - 1);
        }}
      >
        <i className="fa-solid fa-caret-left"></i>
      </div>
      <div
        className="main-btn btn"
        onClick={() => {
          changePage(1);
        }}
      >{`${page} / ${totalPages}`}</div>
      <div
        className="next-btn btn"
        onClick={() => {
          changePage(page + 1);
        }}
      >
        <i className="fa-solid fa-caret-right"></i>
      </div>
    </div>
  );
};
