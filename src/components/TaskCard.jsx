import "./TaskCard.css";

const TaskCard = ({ task, onDeleteTask, onOpenEditTaskForm, onEditTask }) => {
  const handleMoveLeftTask = (task) => {
    if (task.status === "In Progress") {
      onEditTask({ ...task, status: "To Do" });
    } else {
      onEditTask({ ...task, status: "In Progress" });
    }
  };

  const handleMoveRightTask = (task) => {
    if (task.status === "In Progress") {
      onEditTask({ ...task, status: "Done" });
    } else {
      onEditTask({ ...task, status: "In Progress" });
    }
  };

  return (
    <div className="task-card-container">
      <div className="task-card-actions-container">
        <div>
          <button onClick={() => onOpenEditTaskForm(task.id)}>Edit</button>
          <button onClick={() => onDeleteTask(task.id)}>Delete</button>
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
