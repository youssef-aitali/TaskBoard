import TasksBoard from "./TasksBoard";
import NewTaskForm from "./NewTaskForm";
import { useTasks } from "../Contexts/TasksContext";

const TaskBoardsPage = () => {
  const { taskDialogOpen } = useTasks();
  return (
    <>
      <nav>
        <img
          src="/logo.svg"
          style={{ width: 80, height: 80 }}
          alt="TaskBoard"
        />
        <h3>Task Board</h3>
        <span>Current User</span>
      </nav>
      <div className="flex gap-6">
        <TasksBoard status="To Do" />
        <TasksBoard status="In Progress" />
        <TasksBoard status="Done" />
      </div>
      {taskDialogOpen && <NewTaskForm />}
    </>
  );
};

export default TaskBoardsPage;
