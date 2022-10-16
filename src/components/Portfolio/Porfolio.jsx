import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TagContainer, CardContainer, PageContainer } from "./";

import { setProjectList } from "../../store/slices/projectListSlice";
import "./portfolio.css";
import {
  calculateCardsPerPage,
  filterProjectList,
  paginate,
} from "../../helpers";

export const Porfolio = () => {
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);

  const [cardsPerPage, setCardsPerPage] = useState(calculateCardsPerPage());

  useEffect(() => {
    window.addEventListener("resize", () => {
      setCardsPerPage(calculateCardsPerPage());
    });
  }, []);

  const { tagList } = useSelector((state) => state.projectList);

  useEffect(() => {
    const newProjectList = filterProjectList(tagList, 3, 1);
    dispatch(setProjectList(newProjectList));
  }, [tagList]);

  const { filteredProjectList } = useSelector((state) => state.projectList);

  const renderedProjectList = paginate(page, cardsPerPage, filteredProjectList);

  const totalPages =
    parseInt(filteredProjectList.length / cardsPerPage) +
    (filteredProjectList.length % cardsPerPage);

  if (totalPages > 0 && page > totalPages) setPage(1);

  return (
    <div className="portfolio">
      <TagContainer />
      <CardContainer
        projectList={renderedProjectList}
        cardsPerPage={cardsPerPage}
      />
      <PageContainer page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
};
