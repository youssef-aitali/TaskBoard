import { useTasks } from "../Contexts/TasksContext";
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";

import "./TaskCard.css";

const priorityColors = {
  high: "#ff6b6b",
  medium: "#ffd166",
  low: "#06d6a0",
  default: "#cccccc",
};

const getPriorityColor = (priority) => {
  return priorityColors[priority.toLowerCase()] || priorityColors.default;
};

const TaskCard = ({ task }) => {
  const { setTaskToEditId, dispatch, setTaskDialogOpen } = useTasks();

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
      <div className="task-card-actions-container mb-4">
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-400 text-white text-sm px-2 py-2 rounded-md cursor-pointer font-medium mr-1"
            onClick={() => openEditTaskDialog(task.id)}
          >
            <PencilSquareIcon className="size-5 text-white" />
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-400 text-white text-sm px-2 py-2 rounded-md cursor-pointer font-medium ml-1"
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
            className="bg-blue-500 hover:bg-blue-400 text-white text-sm px-1 py-1 rounded-md cursor-pointer font-medium mr-1"
            onClick={() => handleMoveLeftTask(task)}
            disabled={task.status === "To Do"}
          >
            <ChevronLeftIcon className="size-6 text-white" />
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-400 text-white text-sm px-1 py-1 rounded-md cursor-pointer font-medium ml-1"
            onClick={() => handleMoveRightTask(task)}
            disabled={task.status === "Done"}
          >
            <ChevronRightIcon className="size-6 text-white" />
          </button>
        </div>
      </div>
      <div className="flex flex-col">
        <h3 className="self-center text-lg font-semibold">{task.title}</h3>
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
