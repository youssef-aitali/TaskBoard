import { useState } from "react";

import "./TaskCard.css";

const TaskCard = ({ task }) => {

  return (
    <div className="task-card-container">
      <div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>{task.priority}</p>
      <p>{task.dueDate}</p>
      <p>
        {"Assigned to "}
        <strong>{task.assisgnee}</strong>
      </p>
    </div>
  );
};

export default TaskCard;
