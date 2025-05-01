import "./TaskCard.css";

const TaskCard = ({
  task,
  type,
  onDeleteTask,
  onMoveTask,
  openNewTaskForm,
  onEditTaskSelect,
  onEditTypeSelect,
}) => {
  const handleMoveLeftTask = (taskId) => {
    if (type === "In Progress") {
      onMoveTask(taskId, type, "To Do");
    } else {
      onMoveTask(taskId, type, "In Progress");
    }
  };

  const handleMoveRightTask = (taskId) => {
    if (type === "In Progress") {
      onMoveTask(taskId, type, "Done");
    } else {
      onMoveTask(taskId, type, "In Progress");
    }
  };

  const handleOpenTaskForm = (currentTask, currentType) => {
    onEditTaskSelect(currentTask);
    onEditTypeSelect(currentType);
    openNewTaskForm();
  };

  return (
    <div className="task-card-container">
      <div className="task-card-actions-container">
        <div>
          <button onClick={() => handleOpenTaskForm(task, type)}>Edit</button>
          <button onClick={() => onDeleteTask(task.id, type)}>Delete</button>
        </div>
        <div>
          <button
            onClick={() => handleMoveLeftTask(task.id)}
            disabled={type === "To Do"}
          >
            {"<"}
          </button>
          <button
            onClick={() => handleMoveRightTask(task.id)}
            disabled={type === "Done"}
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
