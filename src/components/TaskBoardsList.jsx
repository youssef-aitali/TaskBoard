import { useTasks } from "../Contexts/TasksContext";
import TasksBoard from "./TasksBoard";
import NewTaskForm from "./NewTaskForm";

const TaskBoardsList = () => {
  const { taskDialogOpen } = useTasks();

  return (
    <div className="container">
      <TasksBoard status="To Do" />
      <TasksBoard status="In Progress" />
      <TasksBoard status="Done" />
      {taskDialogOpen && <NewTaskForm />}
    </div>
  );
};

export default TaskBoardsList;
