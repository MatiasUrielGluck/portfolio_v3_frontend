import { useEffect, useState } from "react";
import publicApi from "../api/publicApi";
import { filterSkillList } from "../helpers";

export const useSkills = (deleteWindow) => {
  const [frontSkillList, setFrontSkillList] = useState([]);
  const [backSkillList, setBackSkillList] = useState([]);

  const getSkillList = async () => {
    const resp = await publicApi().get("/skills");
    const data = await resp.data;
    const list = await data.data.skills;
    const { frontList, backList } = filterSkillList(list);
    setFrontSkillList(frontList);
    setBackSkillList(backList);
  };

  useEffect(() => {
    getSkillList();
  }, [deleteWindow]);

  return { frontSkillList, backSkillList, setFrontSkillList, setBackSkillList };
};
