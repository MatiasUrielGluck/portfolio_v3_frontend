import { useState } from "react";
import { TagContainer, CardContainer, PageContainer } from "./";
import "./portfolio.css";

import { projectList } from "../../data/tempProjects"; // TEMP
import { useEffect } from "react";
import { usePagination } from "../../hooks/usePagination";

export const Porfolio = () => {
  const [page, setPage] = useState(1);
  const { totalPages, cardsPerPage } = usePagination();

  return (
    <div className="portfolio">
      <TagContainer />
      <CardContainer />
      <PageContainer page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
};
