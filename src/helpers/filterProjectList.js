import { projectList } from "../data/tempProjects";

export const filterProjectList = (tagList) => {
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
  return filteredByTagProjectList;
};
