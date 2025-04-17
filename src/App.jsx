import TasksBoard from "./components/TasksBoard";
import "./App.css";

const initialTaskList = [
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
    status: "in progress",
    priority: "High",
    description: "Prepare for the prelaunch meeting with the team",
    dueDate: "2023-05-01",
    assisgnee: "John Doe",
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
];

function App() {
  return (
    <>
    <nav>
      <h3>Task Board</h3>
      <span>Current User</span>
      </nav>
    <div className="container">
      <TasksBoard type="To Do" tasksList={initialTaskList}/>
      <TasksBoard type="In Progress" tasksList={initialTaskList}/>
      <TasksBoard type="Done" tasksList={initialTaskList}/>
    </div>
    </>
  );
}

export default App;
