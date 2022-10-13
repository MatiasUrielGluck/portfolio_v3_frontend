import { useEffect, useState } from "react";

import { projectList } from "../data/tempProjects";

export const usePagination = () => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [cardsPerPage, setCardsPerPage] = useState();

  const [renderedProjectList, setRenderedProjectList] = useState(projectList);

  const calculateCardsPerPage = () => {
    if (window.innerWidth < 768) {
      return 1;
    } else if (window.innerWidth < 1400) {
      return 2;
    } else {
      return 3;
    }
  };

  const paginate = () => {
    const cardsPerPageResult = calculateCardsPerPage();

    const totalPagesResult =
      parseInt(projectList.length / cardsPerPageResult) +
      (projectList.length % cardsPerPageResult);

    setTotalPages(totalPagesResult);
    setCardsPerPage(cardsPerPageResult);
    return cardsPerPageResult;
  };

  useEffect(() => {
    let cardsPerPageResult = paginate();
  }, []);

  window.addEventListener("resize", paginate);

  return {
    page,
    setPage,
    totalPages,
    cardsPerPage,
    renderedProjectList,
  };
};
