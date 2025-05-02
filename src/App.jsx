import { useState, useReducer } from "react";

import TasksBoard from "./components/TasksBoard";
import NewTaskForm from "./components/NewTaskForm";

import "./App.css";
import tasksReducer from "./reducers/tasksReducer";

const initialTasksList = [
  {
    id: 1,
    title: "Write a blog post",
    status: "In Progress",
    priority: "High",
    description: "Write a blog post about the upcoming launch",
    dueDate: "2023-01-13",
    assignee: "John Doe",
  },
  {
    id: 2,
    title: "Make a promotional video for the app",
    status: "To Do",
    priority: "Medium",
    description: "Visit the dentist for a checkup",
    dueDate: "2023-01-01",
    assignee: "Kate Smith",
  },
  {
    id: 3,
    title: "Finish project report",
    status: "Done",
    priority: "Low",
    description: "Complete the project report and send it to the manager",
    dueDate: "2023-10-01",
    assignee: "Sam Wilson",
  },
  {
    id: 4,
    title: "Prepare for prelaunch meeting",
    status: "In Progress",
    priority: "High",
    description: "Prepare for the prelaunch meeting with the team",
    dueDate: "2023-05-01",
    assignee: "Lucy Gibson",
  },
  {
    id: 5,
    title: "Meet with maketing team",
    status: "Done",
    priority: "Medium",
    description: "Final touches on the marketing strategy",
    dueDate: "2023-11-01",
    assignee: "Samantha Brown",
  },
];

function App() {
  /* const [tasksList, setTasksList] = useState(initialTasksList); */
  const [tasksList, dispatch] = useReducer(tasksReducer, initialTasksList);
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const [newTaskDialog, setNewTaskDialog] = useState(false);

  const openAddTaskDialog = () => {
    setNewTaskDialog(true);
  };

  const openEditTaskDialog = (taskId) => {
    setSelectedTaskId(taskId);
    setNewTaskDialog(true);
  };

  const handleAddNewTask = (newTask) => {
    dispatch({
      type: "task_added",
      task: newTask,
    });
    setNewTaskDialog(false);
  };

  const handleEditTask = (updatedTask) => {
    dispatch({
      type: "task_edited",
      task: updatedTask,
    });
    setNewTaskDialog(false);
  };

  const handleDeleteTask = (taskId) => {
    dispatch({
      type: "task_deleted",
      taskId: taskId,
    });
  };

  const handleMoveTask = (taskId, sourceType, targetType) => {
    const movedTask = tasksList[sourceType].find((t) => t.id === taskId);
    const newTasksList = {
      ...tasksList,
      [sourceType]: tasksList[sourceType].filter((t) => t.id !== taskId),
      [targetType]: [...tasksList[targetType], movedTask],
    };
    setTasksList(newTasksList);
  };

  return (
    <>
      <nav>
        <h3>Task Board</h3>
        <span>Current User</span>
      </nav>
      <div className="container">
        <TasksBoard
          status="To Do"
          tasksList={tasksList}
          openNewTaskForm={openAddTaskDialog}
          onDeleteTask={handleDeleteTask}
          onOpenEditTaskForm={openEditTaskDialog}
          onEditTask={handleEditTask}
        />
        <TasksBoard
          status="In Progress"
          tasksList={tasksList}
          onDeleteTask={handleDeleteTask}
          openNewTaskForm={openAddTaskDialog}
          onOpenEditTaskForm={openEditTaskDialog}
          onEditTask={handleEditTask}
        />
        <TasksBoard
          status="Done"
          tasksList={tasksList}
          onDeleteTask={handleDeleteTask}
          openNewTaskForm={openAddTaskDialog}
          onOpenEditTaskForm={openEditTaskDialog}
          onEditTask={handleEditTask}
        />
      </div>
      {newTaskDialog && (
        <NewTaskForm
          currentTask={tasksList.find((t) => t.id === selectedTaskId)}
          onAddNewTask={handleAddNewTask}
          onCloseTaskDialog={setNewTaskDialog}
          onEditTask={handleEditTask}
        />
      )}
    </>
  );
}

export default App;
