import { useState } from "react";
import { Navbar } from "../";
import publicApi from "../../api/publicApi";
import "./projectsadmin.css";

export const ProjectsAdmin = () => {
  const [previewSource, setPreviewSource] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!previewSource) return;
    // uploadImage(previewSource)
    uploadImage("test", "testing desc", previewSource, "httpsxd", "asdfasdfhtml")
  };
 
  const uploadImage = async (name, description, base64EncodedImage, demoLink, codeLink) => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsInVzZXJuYW1lIjoibWF0aWFzIiwiYXBwcm92ZWQiOnRydWUsImlhdCI6MTY2NjEzNDY2OSwiZXhwIjoxNjY2MTQxODY5fQ.EX0WbkWkNIHlMIePjHm6cHEnfK9dGdI1HKCweK1VoJs" // TODO: From localstorage
    const result = await publicApi().post('/projects', { name, description, image: base64EncodedImage, demoLink, codeLink, token });
    console.log(result)
  }

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

  return (
    <>
      <Navbar />
      <div className="projects-admin">
        <div className="projects-subcontainer">
          <h2>Projects Administrator</h2>
          <h3>Add new project</h3>
          <form onSubmit={onFormSubmit}>
            <input type="text" name="name" placeholder="Name" />
            <input type="text" name="description" placeholder="Description" />
            <input type="text" name="demoLink" placeholder="Demo link" />
            <input type="text" name="codeLink" placeholder="Code link" />
            <input
              type="file"
              name="image"
              onChange={onFileInputChange}
            />
            <button type="submit">Create project</button>
          </form>

          {previewSource ? (
            <img
              src={previewSource}
              alt="selected image"
              className="preview-image"
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};
