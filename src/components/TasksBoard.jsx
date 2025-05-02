import TaskCard from "./TaskCard";
import "./TasksBoard.css";

const TasksBoard = ({
  status,
  tasksList,
  onDeleteTask,
  openNewTaskForm,
  onOpenEditTaskForm,
  onEditTask,
}) => {
  return (
    <div className="tasks-board-container">
      <h2>{status}</h2>
      {tasksList
        .filter((t) => t.status === status)
        .map((t) => (
          <TaskCard
            task={t}
            key={t.id}
            onDeleteTask={onDeleteTask}
            onOpenEditTaskForm={onOpenEditTaskForm}
            onEditTask={onEditTask}
          />
        ))}
      {status === "To Do" && (
        <button onClick={openNewTaskForm}>New task</button>
      )}
    </div>
  );
};

export default TasksBoard;
