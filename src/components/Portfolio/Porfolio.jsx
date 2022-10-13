import { useEffect, useState } from "react";
import { usePagination } from "../../hooks/usePagination";
import { TagContainer, CardContainer, PageContainer } from "./";
import "./portfolio.css";

import { projectList } from "../../data/tempProjects"; // TEMP

export const Porfolio = () => {
  const { page, setPage, totalPages, cardsPerPage, renderedProjectList } =
    usePagination();

  const filterProjectList = (localCardsPerPage, localPage) => {
    let rawPage = localPage - 1;

    const filteredProjectList = [];

    for (
      let i = localCardsPerPage * rawPage;
      i < localCardsPerPage * rawPage + localCardsPerPage;
      i++
    ) {
      if (i < 0 || i > projectList.length - 1 || !projectList[i]) break;

      filteredProjectList.push(projectList[i]);
    }

    return filteredProjectList;
  };

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
