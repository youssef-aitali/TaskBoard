import { useState } from "react";

import TasksBoard from "./components/TasksBoard";
import NewTaskForm from "./components/NewTaskForm";

import "./App.css";

const initialTasksList = {
  "To Do": [
    {
      id: 2,
      title: "Make a promotional video for the app",
      priority: "Medium",
      description: "Visit the dentist for a checkup",
      dueDate: "2023-01-01",
      assignee: "Kate Smith",
    },
  ],
  "In Progress": [
    {
      id: 1,
      title: "Write a blog post",
      priority: "High",
      description: "Write a blog post about the upcoming launch",
      dueDate: "2023-01-13",
      assignee: "John Doe",
    },
    {
      id: 4,
      title: "Prepare for prelaunch meeting",
      priority: "High",
      description: "Prepare for the prelaunch meeting with the team",
      dueDate: "2023-05-01",
      assignee: "Lucy Gibson",
    },
  ],
  Done: [
    {
      id: 3,
      title: "Finish project report",
      priority: "Low",
      description: "Complete the project report and send it to the manager",
      dueDate: "2023-10-01",
      assignee: "Sam Wilson",
    },
    {
      id: 5,
      title: "Meet with maketing team",
      priority: "Medium",
      description: "Final touches on the marketing strategy",
      dueDate: "2023-11-01",
      assignee: "Samantha Brown",
    },
  ],
};

/* const initialTasksList = [
  {
    id: 1,
    title: "Write a blog post",
    status: "In Progress",
    priority: "High",
    description: "Write a blog post about the upcoming launch",
    dueDate: "2023-13-01",
    assisgnee: "John Doe",
  },
  {
    id: 2,
    title: "Make a promotional video for the app",
    status: "To Do",
    priority: "Medium",
    description: "Visit the dentist for a checkup",
    dueDate: "2023-01-01",
    assisgnee: "Kate Smith",
  },
  {
    id: 3,
    title: "Finish project report",
    status: "Done",
    priority: "Low",
    description: "Complete the project report and send it to the manager",
    dueDate: "2023-10-01",
    assisgnee: "Sam Wilson",
  },
  {
    id: 4,
    title: "Prepare for prelaunch meeting",
    status: "In Progress",
    priority: "High",
    description: "Prepare for the prelaunch meeting with the team",
    dueDate: "2023-05-01",
    assisgnee: "Lucy Gibson",
  },
  {
    id: 5,
    title: "Meet with maketing team",
    status: "Done",
    priority: "Medium",
    description: "Final touches on the marketing strategy",
    dueDate: "2023-11-01",
    assisgnee: "Samantha Brown",
  },
]; */

function App() {
  const [tasksList, setTasksList] = useState(initialTasksList);
  const [newTaskDialog, setNewTaskDialog] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [selectedType, setSelectedType] = useState("");

  const openAddTaskDialog = () => {
    setNewTaskDialog(true);
  };

  const handleAddNewTask = (newTask) => {
    !selectedTask
      ? setTasksList({
          ...tasksList,
          ["To Do"]: [
            ...tasksList["To Do"],
            { ...newTask, id: tasksList["To Do"].length++ },
          ],
        })
      : setTasksList({
          ...tasksList,
          [selectedType]: tasksList[selectedType].map((t) =>
            t.id === newTask.id ? newTask : t
          ),
        });

    setNewTaskDialog(false);
  };

  /* const handleEditTask = (taskId, taskType, newTask) => {
    setTasksList({
      ...tasksList,
      [taskType]: tasksList[taskType].map((t) =>
        t.id === taskId ? newTask : t
      ),
    });
  };
 */
  const handleDeleteTask = (taskId, taskType) => {
    setTasksList({
      ...tasksList,
      [taskType]: tasksList[taskType].filter((t) => t.id !== taskId),
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
        {/* <TasksBoard
          type="To Do"
          tasksList={tasksList}
          openNewTaskForm={openAddTaskDialog}
        />
        <TasksBoard type="In Progress" tasksList={tasksList} />
        <TasksBoard type="Done" tasksList={tasksList} /> */}
        <TasksBoard
          type="To Do"
          tasksList={tasksList}
          openNewTaskForm={openAddTaskDialog}
          onDeleteTask={handleDeleteTask}
          onMoveTask={handleMoveTask}
          onEditTaskSelect={setSelectedTask}
          onEditTypeSelect={setSelectedType}
        />
        <TasksBoard
          type="In Progress"
          tasksList={tasksList}
          onDeleteTask={handleDeleteTask}
          onMoveTask={handleMoveTask}
          onEditTaskSelect={setSelectedTask}
          openNewTaskForm={openAddTaskDialog}
          onEditTypeSelect={setSelectedType}
        />
        <TasksBoard
          type="Done"
          tasksList={tasksList}
          onDeleteTask={handleDeleteTask}
          onMoveTask={handleMoveTask}
          onEditTaskSelect={setSelectedTask}
          openNewTaskForm={openAddTaskDialog}
          onEditTypeSelect={setSelectedType}
        />
      </div>
      {newTaskDialog && (
        <NewTaskForm
          currentTask={selectedTask}
          onAddNewTask={handleAddNewTask}
          onCloseTaskDialog={setNewTaskDialog}
        />
      )}
    </>
  );
}

export default App;
