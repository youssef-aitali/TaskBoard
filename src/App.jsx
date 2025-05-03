import { TasksProvider } from "./Contexts/TasksContext";
import TaskBoardsList from "./components/TaskBoardsList";

import "./App.css";

function App() {
  return (
    <>
      <nav>
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
