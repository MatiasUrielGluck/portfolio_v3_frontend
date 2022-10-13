import { useEffect, useState } from "react";
import { usePagination } from "../../hooks/usePagination";
import { TagContainer, CardContainer, PageContainer } from "./";
import { filterProjectList } from "../../helpers";
import "./portfolio.css";

import { projectList } from "../../data/tempProjects"; // TEMP

export const Porfolio = () => {
  const { page, setPage, totalPages, cardsPerPage, renderedProjectList } =
    usePagination();

  const filteredProjectList = filterProjectList(cardsPerPage, page);
  if (page > totalPages) setPage(1);

  return (
    <div className="portfolio">
      <TagContainer />
      <CardContainer
        projectList={filteredProjectList}
        cardsPerPage={cardsPerPage}
      />
      <PageContainer page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
};
