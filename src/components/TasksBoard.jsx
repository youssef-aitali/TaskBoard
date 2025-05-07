import { useTasks } from "../Contexts/TasksContext";
import TaskCard from "./TaskCard";

const TasksBoard = ({ status }) => {
  const { tasksList, setTaskDialogOpen } = useTasks();

  return (
    <div className="flex flex-col flex-shrink-0 items-center bg-blue-200 px-5 py-5 mt-6 w-120">
      <div className="text-xl font-semibold mb-2">{status}</div>
      {tasksList
        .filter((t) => t.status === status)
        .map((t) => (
          <TaskCard task={t} key={t.id} />
        ))}
      {status === "To Do" && (
        <button
          rol="button"
          className="bg-blue-500 hover:bg-blue-400 text-white text-sm px-4 py-2 mt-2 rounded-full cursor-pointer font-medium shadow-lg shadow-blue-500/50"
          onClick={() => setTaskDialogOpen(true)}
        >
          New task
        </button>
      )}
    </div>
  );
};

export default TasksBoard;
