import TaskCard from "./TaskCard";

const TasksBoard = ({ type, tasksList }) => {
  return (
    <div className="tasks-board">
      <h2>{type}</h2>
      {tasksList.map((t) => (
        <TaskCard task={t} key={t.id} />
      ))}
    </div>
  );
};

export default TasksBoard;
