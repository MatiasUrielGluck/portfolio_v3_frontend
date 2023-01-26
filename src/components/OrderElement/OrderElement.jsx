import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import publicApi from "../../api/publicApi";

export const OrderElement = ({ project, save }) => {
  const [textPosition, setTextPosition] = useState(project.position); // initial value should be project.position

  useEffect(() => {
    if (save) {
      savePosition();
    }
  }, [save]);

  const onTextChange = (e) => {
    setTextPosition(e.target.value);
  };

  const savePosition = async () => {
    const body = {
      position: parseInt(textPosition),
    };

    try {
      console.log(project.id);
      await publicApi().patch(`/projects/${project.id}`, body);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="order-element">
      <p key={project.id}>{project.name}</p>
      <input type="text" onChange={onTextChange} value={textPosition} />
    </div>
  );
};
