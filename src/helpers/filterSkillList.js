export const filterSkillList = (skillList) => {
  let frontList = [];
  let backList = [];

  skillList.forEach((skill) => {
    if (skill.context === "frontend") {
      frontList.push(skill);
    } else {
      backList.push(skill);
    }
  });

  return {
    frontList,
    backList,
  };
};
