import { useEffect, useState } from "react";
import publicApi from "../api/publicApi";

export const useEducation = (dependencyList) => {
  const [educationList, setEducationList] = useState([]);

  const getEducationList = async () => {
    const resp = await publicApi().get("/education");
    const data = await resp.data;
    const list = await data.data.education;
    setEducationList(list);
  };

  useEffect(() => {
    getEducationList();
  }, dependencyList);

  return {
    educationList,
    setEducationList,
  };
};
