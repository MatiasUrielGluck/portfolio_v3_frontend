import { useSelector } from "react-redux";
import { projectList } from "../data/tempProjects";

export const filterProjectList = (localCardsPerPage, localPage) => {
  const { tagList } = useSelector((state) => state.projectList);

  let filteredByTagProjectList = projectList;

  if (tagList.length > 0) {
    filteredByTagProjectList = [];
    for (const project of projectList) {
      let pusheable = true;
      for (const tag of tagList) {
        if (!project.tagList.map((tag) => tag.name).includes(tag)) {
          pusheable = false;
          break;
        }
      }

      if (pusheable) filteredByTagProjectList.push(project);
    }
  }

  let rawPage = localPage - 1;

  const filteredProjectList = [];

  for (
    let i = localCardsPerPage * rawPage;
    i < localCardsPerPage * rawPage + localCardsPerPage;
    i++
  ) {
    if (
      i < 0 ||
      i > filteredByTagProjectList.length - 1 ||
      !filteredByTagProjectList[i]
    )
      break;

    filteredProjectList.push(filteredByTagProjectList[i]);
  }

  return filteredProjectList;
};
