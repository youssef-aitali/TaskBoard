import "./TaskCard.css";

const TaskCard = ({ task }) => {
  return (
    <div className="task-card-container">
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
