import { useState } from "react";

import TasksBoard from "./components/TasksBoard";
import NewTaskForm from "./components/NewTaskForm";

import { TasksProvider } from "./Contexts/TasksContext";

import "./App.css";

function App() {
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const [newTaskDialog, setNewTaskDialog] = useState(false);

  const openAddTaskDialog = () => {
    setNewTaskDialog(true);
  };

  const openEditTaskDialog = (taskId) => {
    setSelectedTaskId(taskId);
    setNewTaskDialog(true);
  };

  return (
    <TasksProvider>
      <nav>
        <h3>Task Board</h3>
        <span>Current User</span>
      </nav>
      <div className="container">
        <TasksBoard
          status="To Do"
          openNewTaskForm={openAddTaskDialog}
          onOpenEditTaskForm={openEditTaskDialog}
        />
        <TasksBoard
          status="In Progress"
          openNewTaskForm={openAddTaskDialog}
          onOpenEditTaskForm={openEditTaskDialog}
        />
        <TasksBoard
          status="Done"
          openNewTaskForm={openAddTaskDialog}
          onOpenEditTaskForm={openEditTaskDialog}
        />
      </div>
      {newTaskDialog && (
        <NewTaskForm
          selectedTaskId={selectedTaskId}
          onCloseTaskDialog={setNewTaskDialog}
        />
      )}
    </TasksProvider>
  );
}

export default App;
