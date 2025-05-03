import { useTasks } from "../Contexts/TasksContext";
import "./TaskCard.css";

const TaskCard = ({ task }) => {
  const { setTaskToEditId, dispatch, setTaskDialogOpen } = useTasks();

  const openEditTaskDialog = (taskId) => {
    setTaskToEditId(taskId);
    setTaskDialogOpen(true);
  };

  const handleMoveLeftTask = (task) => {
    dispatch({
      type: "task_edited",
      task: {
        ...task,
        status: task.status === "In Progress" ? "To Do" : "In Progress",
      },
    });
  };

  const handleMoveRightTask = (task) => {
    dispatch({
      type: "task_edited",
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
            Edit
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
            Delete
          </button>
        </div>
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-400 text-white text-sm px-2 py-1 cursor-pointer font-medium mr-1"
            onClick={() => handleMoveLeftTask(task)}
            disabled={task.status === "To Do"}
          >
            {"<"}
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-400 text-white text-sm px-2 py-1 cursor-pointer font-medium ml-1"
            onClick={() => handleMoveRightTask(task)}
            disabled={task.status === "Done"}
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
