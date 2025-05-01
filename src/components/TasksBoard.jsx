import TaskCard from "./TaskCard";
import "./TasksBoard.css";

const TasksBoard = ({
  type,
  tasksList,
  onDeleteTask,
  onMoveTask,
  openNewTaskForm,
  onOpenTaskForm,
  onEditTaskSelect,
  onEditTypeSelect,
}) => {
  return (
    <div className="tasks-board-container">
      <h2>{type}</h2>
      {tasksList[type].map((t) => (
        <TaskCard
          task={t}
          key={t.id}
          type={type}
          onDeleteTask={onDeleteTask}
          onMoveTask={onMoveTask}
          openNewTaskForm={openNewTaskForm}
          onOpenTaskForm={onOpenTaskForm}
          onEditTaskSelect={onEditTaskSelect}
          onEditTypeSelect={onEditTypeSelect}
        />
      ))}
      {type === "To Do" && <button onClick={openNewTaskForm}>New task</button>}
    </div>
  );
};

export default TasksBoard;
