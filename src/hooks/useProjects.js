import { useEffect, useState } from "react";
import publicApi from "../api/publicApi";

export const useProjects = () => {
  const [projectList, setProjectList] = useState([]);
  const [tagList, setTagList] = useState([]);

  const getProjectList = async () => {
    const resp = await publicApi().get("/projects");
    const data = await resp.data;
    const list = await data.data.projects;
    setProjectList(list);
  };

  const getTagList = async () => {
    const resp = await publicApi().get("/tags");
    const data = await resp.data;
    const list = await data.data.tags;
    setTagList(list);
  };

  useEffect(() => {
    getProjectList();
    getTagList();
  }, []);

  return {
    projectList,
    setProjectList,
    tagList,
    setTagList,
  };
};
