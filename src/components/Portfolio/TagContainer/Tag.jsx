import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTag, removeTag } from "../../../store/slices/projectListSlice";

export const Tag = ({ name }) => {
  const [enabled, setEnabled] = useState(false);

  const { tagList } = useSelector((state) => state.projectList);
  const dispatch = useDispatch();

  const toggleTag = () => {
    setEnabled(!enabled);
    if (enabled) {
      dispatch(
        removeTag(name)
      );
    } else {
      dispatch(
        addTag(name)
      );
    }
  };

  return (
    <div className={`tag ${enabled ? "enabled" : null}`} onClick={toggleTag}>
      <p>{name}</p>
    </div>
  );
};
