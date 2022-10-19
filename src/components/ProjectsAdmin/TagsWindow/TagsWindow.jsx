import { useContext } from "react";
import publicApi from "../../../api/publicApi";
import { useForm } from "../../../hooks";
import "./tagswindow.css";

export const TagsWindow = ({ Context }) => {
  const { setTagsWindow, projectInfo } = useContext(Context);

  const { tagsInput, onInputChange } = useForm({
    tagsInput: "",
  });

  const onCloseWindow = () => {
    setTagsWindow(false);
  };

  const onCreate = async (e) => {
    e.preventDefault();

    // await publicApi().post("/skills", {
    //   context: createCategory.toLowerCase(),
    //   name: skillName,
    //   icon: skillIcon,
    // });
    onCloseWindow();
  };

  return (
    <div className="tags-window">
      <div className="window-container">
        <h2>Tags</h2>

        <form onSubmit={onCreate}>
          <input
            type="text"
            name="tagsInput"
            placeholder="Add a tag"
            value={tagsInput}
            onChange={onInputChange}
          />
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
