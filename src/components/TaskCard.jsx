import { useTasks } from "../Contexts/TasksContext";
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";

const priorityColors = {
  high: "#ff6b6b",
  medium: "#ffd166",
  low: "#06d6a0",
  default: "#cccccc",
};

const TaskCard = ({ task }) => {
  const { setTaskToEditId, dispatch, setTaskDialogOpen } = useTasks();

  const getPriorityColor = (priority) => {
    return priorityColors[priority.toLowerCase()] || priorityColors.default;
  };

  const openEditTaskDialog = (taskId) => {
    setTaskToEditId(taskId);
    setTaskDialogOpen(true);
  };

  const handleMoveLeftTask = (task) => {
    dispatch({
      type: "task_moved",
      task: {
        ...task,
        status: task.status === "In Progress" ? "To Do" : "In Progress",
      },
    });
  };

  const handleMoveRightTask = (task) => {
    dispatch({
      type: "task_moved",
      task: {
        ...task,
        status: task.status === "In Progress" ? "Done" : "In Progress",
      },
    });
  };

  return (
    <div className="bg-white shadow-lg p-4 my-2 w-full">
      <div className="mb-4 flex justify-between">
        <div>
          <button
            className="bg-blue-400 hover:bg-blue-300 text-white text-sm px-2 py-2 rounded-md cursor-pointer font-medium mr-1"
            onClick={() => openEditTaskDialog(task.id)}
          >
            <PencilSquareIcon className="size-5 text-white" />
          </button>
          <button
            className="bg-blue-400 hover:bg-blue-300 text-white text-sm px-2 py-2 rounded-md cursor-pointer font-medium ml-1"
            onClick={() =>
              dispatch({
                type: "task_deleted",
                taskId: task.id,
              })
            }
          >
            <TrashIcon className="size-5 text-white" />
          </button>
        </div>
        <div>
          <button
            className={`text-white text-sm px-1 py-1 rounded-md font-medium ml-1 ${
              task.status !== "To Do"
                ? "bg-blue-400 hover:bg-blue-300 cursor-pointer"
                : "bg-blue-300"
            }`}
            onClick={() => handleMoveLeftTask(task)}
            disabled={task.status === "To Do"}
          >
            <ChevronLeftIcon className="size-6 text-white" />
          </button>
          <button
            className={`text-white text-sm px-1 py-1 rounded-md font-medium ml-1 ${
              task.status !== "Done"
                ? "bg-blue-400 hover:bg-blue-300 cursor-pointer"
                : "bg-blue-300"
            }`}
            onClick={() => handleMoveRightTask(task)}
            disabled={task.status === "Done"}
          >
            <ChevronRightIcon className="size-6 text-white" />
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="self-center text-lg font-semibold">{task.title}</div>
        <p>{task.description}</p>
        <span
          className="self-start"
          style={{
            backgroundColor: getPriorityColor(task.priority),
            color: "#fff",
            padding: "4px 8px",
            fontWeight: "bold",
            borderRadius: "5px",
            fontSize: "0.8rem",
          }}
        >
          {task.priority}
        </span>
        <p>
          {"Deadline: "}
          <strong>{task.dueDate}</strong>
        </p>
        <span className="self-end">
          {"Assigned to "}
          <strong>{task.assignee}</strong>
        </span>
      </div>
    </div>
  );
};

export default TaskCard;
