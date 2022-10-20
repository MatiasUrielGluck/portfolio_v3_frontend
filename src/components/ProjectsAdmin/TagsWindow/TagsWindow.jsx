import { useContext, useState } from "react";
import publicApi from "../../../api/publicApi";
import { useForm } from "../../../hooks";
import { Tag } from "./Tag";
import "./tagswindow.css";

export const TagsWindow = ({ Context }) => {
  const { setTagsWindow, projectInfo } = useContext(Context);
  const { id, Tags } = projectInfo;

  const [LocalTags, setLocalTags] = useState(Tags.filter((tag) => tag));
  const [newTags, setNewTags] = useState([]);
  const [deletedTags, setDeletedTags] = useState([]);

  const { tagsInput, onInputChange, onResetForm } = useForm({
    tagsInput: "",
  });

  const onCloseWindow = () => {
    setTagsWindow(false);
  };

  const onAddTag = () => {
    const tagInfo = {
      id: -LocalTags.length,
      name: tagsInput,
    };

    setNewTags([...newTags, tagInfo]);

    setLocalTags([...LocalTags, tagInfo]);
    onResetForm();
  };

  const onSave = async (e) => {
    e.preventDefault();

    // 1) Crear tags por cada tag en newTags
    // 2) Asociar cada tag al projecto

    // 3) Desasociar tags por cada tag en deletedTags

    // 1)
    for (const tag of newTags) {
      try {
        await publicApi().post("/tags", { name: tag.name });
      } catch (error) {
        console.log(error);
      }
    }

    // 2)
    try {
      const res = await publicApi().get("/tags");
      const data = await res.data;
      const updatedTags = await data.data.tags;

      for (const tag of updatedTags) {
        try {
          await publicApi().post(`/projects/${id}`, {
            tagId: tag.id,
          });
        } catch (error) {
          console.log(error);
        }
      }
    } catch (error) {
      console.log(error);
    }

    // 3)
    for (const tagId of deletedTags) {
      try {
        await publicApi().delete(`/projects/${id}/${tagId}`);
      } catch (error) {
        console.log(error);
      }
    }

    onCloseWindow();
  };

  const localValues = {
    LocalTags,
    setLocalTags,
    newTags,
    setNewTags,
    deletedTags,
    setDeletedTags,
  };

  return (
    <div className="tags-window">
      <div className="window-container">
        <h2>Tags</h2>

        <form onSubmit={onSave}>
          <input
            type="text"
            name="tagsInput"
            placeholder="Add a tag"
            value={tagsInput}
            onChange={onInputChange}
          />

          <div className="add-btn" onClick={onAddTag}>
            Add
          </div>
        </form>

        {/* Actual tags container */}
        <div className="tags-container">
          {LocalTags.map((tag) => (
            <Tag
              id={tag.id}
              name={tag.name}
              key={tag.id}
              localValues={localValues}
            />
          ))}
        </div>

        <div className="actions-container">
          <div className="btn" onClick={onCloseWindow}>
            Cancel
          </div>
          <div className="btn" onClick={onSave}>
            Save
          </div>
        </div>
      </div>
    </div>
  );
};
