import { createContext, useState } from "react";
import { useProjects } from "../../hooks";
import { DeleteWindow } from "../DeleteWindow";
import { Navbar } from "../Navbar";
import { CreateProjectWindow } from "./CreateProjectWindow/CreateProjectWindow";
import { EditProjectWindow } from "./EditProjectWindow/EditProjectWindow";
import { Project } from "./Project";
import "./projectsadmin.css";

export const ProjectsAdmin = () => {
  const [deleteWindow, setDeleteWindow] = useState(false);
  const [toDeleteProjectId, setToDeleteProjectId] = useState(-1);

  const [createWindow, setCreateWindow] = useState(false);

  const [editWindow, setEditWindow] = useState(false);
  const [toEditProjectId, setToEditProjectId] = useState(-1);
  const [projectInfo, setProjectInfo] = useState({});

  const { projectList } = useProjects([deleteWindow, createWindow, editWindow]);

  const projectsValues = {
    setDeleteWindow,
    setToDeleteProjectId,
    toDeleteId: toDeleteProjectId,
    endpoint: "projects",

    createWindow,
    setCreateWindow,

    editWindow,
    setEditWindow,
    setToEditProjectId,
    toEditProjectId,
    projectInfo,
    setProjectInfo,
  };

  const ProjectsContext = createContext();

  const onCreate = () => {
    setCreateWindow(true);
  };

  return (
    <ProjectsContext.Provider value={projectsValues}>
      {deleteWindow ? <DeleteWindow Context={ProjectsContext} /> : null}
      {createWindow ? (
        <CreateProjectWindow Context={ProjectsContext} />
      ) : null}

      {editWindow ? <EditProjectWindow Context={ProjectsContext} /> : null}

      <div className="projects-admin">
        <Navbar />
        <div className="content-container">
          <h2>Projects Administrator</h2>

          <div className="add-btn btn" onClick={onCreate}>
            Add Project
          </div>

          <div className="project-container">
            {projectList.map((project) => (
              <Project
                Context={ProjectsContext}
                id={project.id}
                name={project.name}
                description={project.description}
                Tags={project.Tags}
                imageURL={project.imageURL}
                demoLink={project.demoLink}
                codeLink={project.codeLink}
                key={project.id}
              />
            ))}
          </div>
        </div>
      </div>
    </ProjectsContext.Provider>
  );
};
