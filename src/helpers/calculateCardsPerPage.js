export const calculateCardsPerPage = () => {
  if (window.innerWidth < 768) {
    return 1;
  } else if (window.innerWidth < 1400) {
    return 2;
  } else {
    return 3;
  }
};
