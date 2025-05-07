import { useTasks } from "../Contexts/TasksContext";
import Navbar from "../components/Navbar";
import TasksBoard from "../components/TasksBoard";
import Footer from "../components/Footer";
import NewTaskForm from "../components/NewTaskForm";

const TaskBoardsPage = () => {
  const { taskDialogOpen } = useTasks();
  return (
    <div className="flex flex-col items-center min-h-screen">
      <Navbar />
      <div className="flex-1 pb-8">
        <div className="flex gap-6">
          <TasksBoard status="To Do" />
          <TasksBoard status="In Progress" />
          <TasksBoard status="Done" />
        </div>
      </div>
      <Footer />
      {taskDialogOpen && <NewTaskForm />}
    </div>
  );
};

export default TaskBoardsPage;
