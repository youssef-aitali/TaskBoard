import { TasksProvider } from "./Contexts/TasksContext";
import TaskBoardsPage from "./components/TaskBoardsPage";

import "./App.css";

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
