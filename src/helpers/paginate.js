export const paginate = (page, cardsPerPage, filteredByTagProjectList) => {
  let rawPage = page - 1;

  const filteredProjectList = [];

  for (
    let i = cardsPerPage * rawPage;
    i < cardsPerPage * rawPage + cardsPerPage;
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
