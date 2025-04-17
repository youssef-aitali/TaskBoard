import TaskCard from "./TaskCard";
import "./TasksBoard.css";

const TasksBoard = ({ type, tasksList }) => {
  return (
    <div className="tasks-board-container">
      <h2>{type}</h2>
      {tasksList.filter(t => t.status === type).map((t) => (
        <TaskCard task={t} key={t.id} />
      ))}
      {type==="To Do" && <button>New task</button>}
    </div>
  );
};

export default TasksBoard;
