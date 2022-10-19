import { useContext, useState } from "react";
import publicApi from "../../../api/publicApi";
import { useForm } from "../../../hooks";
import "./createprojectwindow.css";

export const CreateProjectWindow = ({ Context }) => {
  const { setCreateWindow } = useContext(Context);
  const [previewSource, setPreviewSource] = useState("");

  const { projectName, projectDescription, demoLink, codeLink, onInputChange } =
    useForm({
      projectName: "",
      projectDescription: "",
      demoLink: "",
      codeLink: "",
    });

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const onFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  };

  const createProject = async (
    name,
    description,
    base64EncodedImage,
    demoLink,
    codeLink
  ) => {
    const result = await publicApi().post("/projects", {
      name,
      description,
      image: base64EncodedImage,
      demoLink,
      codeLink,
    });
  };

  const onCreate = async (e) => {
    e.preventDefault()
    const resp = await createProject(
      projectName,
      projectDescription,
      previewSource,
      demoLink,
      codeLink
    );
    onCloseWindow()
  };

  const onCloseWindow = () => {
    setCreateWindow(false);
  };

  // const onCreate = async (e) => {
  //   e.preventDefault();

  //   await publicApi().post("/projects", {
  //     name: projectName,
  //     description: projectDescription,
  //   });
  //   onCloseWindow();
  // };

  return (
    <div className="create-project-window create-window">
      <div className="window-container">
        <h2>Create Project</h2>

        <form onSubmit={onCreate}>
          <input
            type="text"
            name="projectName"
            placeholder="Name"
            value={projectName}
            onChange={onInputChange}
          />
          <input
            type="text"
            name="projectDescription"
            placeholder="Description"
            value={projectDescription}
            onChange={onInputChange}
          />
          <input
            type="text"
            name="demoLink"
            placeholder="Demo Link"
            value={demoLink}
            onChange={onInputChange}
          />
          <input
            type="text"
            name="codeLink"
            placeholder="Code Link"
            value={codeLink}
            onChange={onInputChange}
          />
          <input type="file" name="image" onChange={onFileInputChange} />
        </form>

        <div className="actions-container">
          <div className="btn" onClick={onCloseWindow}>
            Cancel
          </div>
          <div className="btn" onClick={onCreate}>
            Create
          </div>
        </div>
      </div>
    </div>
  );
};
