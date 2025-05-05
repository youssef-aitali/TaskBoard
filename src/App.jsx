import { TasksProvider } from "./Contexts/TasksContext";
import TaskBoardsList from "./components/TaskBoardsList";

import "./App.css";

function App() {
  return (
    <>
      <nav>
        <img
          src="/logo.svg"
          style={{ width: 90, height: 90 }}
          alt="TaskBoard"
        />
        <h3>Task Board</h3>
        <span>Current User</span>
      </nav>
      <TasksProvider>
        <TaskBoardsList />
      </TasksProvider>
    </>
  );
}

export default App;
