import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useProjects } from "../../hooks";
import { TagContainer, CardContainer, PageContainer } from "./";
import { setProjectList } from "../../store/slices/projectListSlice";
import {
  calculateCardsPerPage,
  filterProjectList,
  paginate,
} from "../../helpers";
import "./portfolio.css";

export const Porfolio = ({projectList = []}) => {
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
    const newProjectList = filterProjectList(projectList, tagList);
    dispatch(setProjectList(newProjectList));
  }, [tagList, projectList]);

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
