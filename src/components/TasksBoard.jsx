import { useContext } from "react";
import TaskCard from "./TaskCard";
import { TasksListContext } from "../Contexts/TasksContext";
import "./TasksBoard.css";

const TasksBoard = ({ status, openNewTaskForm, onOpenEditTaskForm }) => {
  const tasksList = useContext(TasksListContext);

  return (
    <div className="tasks-board-container">
      <h2>{status}</h2>
      {tasksList
        .filter((t) => t.status === status)
        .map((t) => (
          <TaskCard
            task={t}
            key={t.id}
            onOpenEditTaskForm={onOpenEditTaskForm}
          />
        ))}
      {status === "To Do" && (
        <button onClick={openNewTaskForm}>New task</button>
      )}
    </div>
  );
};

export default TasksBoard;
