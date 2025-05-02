import { useContext } from "react";
import { TasksDipatchContext } from "../Contexts/TasksContext";
import "./TaskCard.css";

const TaskCard = ({ task, onOpenEditTaskForm }) => {
  const dispatch = useContext(TasksDipatchContext);

  const handleMoveLeftTask = (task) => {
    dispatch({
      type: "task_edited",
      task: {
        ...task,
        status: task.status === "In Progress" ? "To Do" : "In Progress",
      },
    });
  };

  const handleMoveRightTask = (task) => {
    dispatch({
      type: "task_edited",
      task: {
        ...task,
        status: task.status === "In Progress" ? "Done" : "In Progress",
      },
    });
  };

  return (
    <div className="task-card-container">
      <div className="task-card-actions-container">
        <div>
          <button
            className="bg-sky-500 hover:bg-sky-700"
            onClick={() => onOpenEditTaskForm(task.id)}
          >
            Edit
          </button>
          <button
            className="bg-sky-500 hover:bg-sky-700"
            onClick={() =>
              dispatch({
                type: "task_deleted",
                taskId: task.id,
              })
            }
          >
            Delete
          </button>
        </div>
        <div>
          <button
            className="bg-sky-500 hover:bg-sky-700"
            onClick={() => handleMoveLeftTask(task)}
            disabled={task.status === "To Do"}
          >
            {"<"}
          </button>
          <button
            className="bg-sky-500 hover:bg-sky-700"
            onClick={() => handleMoveRightTask(task)}
            disabled={task.status === "Done"}
          >
            {">"}
          </button>
        </div>
      </div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>{task.priority}</p>
      <p>
        {"Deadline: "}
        <strong>{task.dueDate}</strong>
      </p>
      <p>
        {"Assigned to "}
        <strong>{task.assignee}</strong>
      </p>
    </div>
  );
};

export default TaskCard;
