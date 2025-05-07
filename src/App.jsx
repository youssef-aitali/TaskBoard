import { TasksProvider } from "./Contexts/TasksContext";
import TaskBoardsPage from "./Pages/TaskBoardsPage";

function App() {
  return (
    <>
      <TasksProvider>
        <TaskBoardsPage />
      </TasksProvider>
    </>
  );
}

export default App;
