/*
4* EL SISTEMA DEBE CARGAR LA LISTA DE PROYECTOS DESDE LA BASE DE DATOS.
*/
export const projectList = [
  {
    id: 1,
    name: "CodeNote",
    desc: "Note app for programmers. Built using the MEVN Stack technologies.",
    img: "/static/images/portfolio/sarasa.png",
    tagsList: [1, 2, 3], // REPRESENTA EL ID DE LOS TAGS ASOCIADOS
  },
  {
    id: 2,
    name: "Gluck Pianos",
    desc: "E-commerce project, using both front-end and backend technologies.",
    img: "/static/images/portfolio/sarasa.png",
    tagsList: [2, 3],
  },
  {
    id: 3,
    name: "Notes app",
    desc: "Fullstack note taking app with category filter, archived and unarchived features.",
    img: "/static/images/portfolio/sarasa.png",
    tagsList: [2, 3],
  },
  {
    id: 4,
    name: "Sudoku",
    desc: "Python sudoku for the terminal.",
    img: "/static/images/portfolio/sarasa.png",
    tagsList: [3],
  },
];
