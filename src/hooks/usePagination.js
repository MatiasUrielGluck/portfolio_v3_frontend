import { useEffect, useState } from "react";

import { projectList } from "../data/tempProjects";

export const usePagination = () => {
  const [totalPages, setTotalPages] = useState();
  const [cardsPerPage, setCardsPerPage] = useState();

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
  };

  useEffect(() => {
    paginate();
  }, []);

  window.addEventListener("resize", paginate);

  return {
    totalPages,
    cardsPerPage,
  };
};
