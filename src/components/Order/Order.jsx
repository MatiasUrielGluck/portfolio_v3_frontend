import React from "react";
import { useState } from "react";
import { useProjects } from "../../hooks";
import { Navbar } from "../Navbar";
import { OrderElement } from "../OrderElement";

import "./order.css";

export const Order = () => {
  const { projectList } = useProjects([]);
  const [save, setSave] = useState(false);

  const onSave = () => {
    setSave(true);
  };

  return (
    <div className="projects-order">
      <Navbar />

      <div className="order-content">
        <h2>Projects Order</h2>

        <div className="order-container">
          {projectList.map((project) => (
            <OrderElement project={project} save={save} key={project.id} />
          ))}
        </div>

        <button onClick={onSave}>Save</button>
      </div>
    </div>
  );
};
