import { useContext } from "react";
import { TasksDipatchContext } from "../Contexts/TasksContext";
import "./TaskCard.css";

const TaskCard = ({ task, onOpenEditTaskForm }) => {
  const dispatch = useContext(TasksDipatchContext);

  const handleMoveLeftTask = (task) => {
    if (task.status === "In Progress") {
      dispatch({
        type: "task_edited",
        task: { ...task, status: "To Do" },
      });
    } else {
      dispatch({
        type: "task_edited",
        task: { ...task, status: "In Progress" },
      });
    }
  };

  const handleMoveRightTask = (task) => {
    if (task.status === "In Progress") {
      dispatch({
        type: "task_edited",
        task: { ...task, status: "Done" },
      });
    } else {
      dispatch({
        type: "task_edited",
        task: { ...task, status: "In Progress" },
      });
    }
  };

  return (
    <div className="task-card-container">
      <div className="task-card-actions-container">
        <div>
          <button onClick={() => onOpenEditTaskForm(task.id)}>Edit</button>
          <button
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
            onClick={() => handleMoveLeftTask(task)}
            disabled={task.status === "To Do"}
          >
            {"<"}
          </button>
          <button
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
