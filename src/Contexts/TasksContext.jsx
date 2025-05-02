import { createContext, useReducer } from "react";

import tasksReducer from "../reducers/tasksReducer";

export const TasksListContext = createContext(null);
export const TasksDipatchContext = createContext(null);

export const TasksProvider = ({ children }) => {
  const [tasksList, dispatch] = useReducer(tasksReducer, initialTasksList);

  return (
    <TasksListContext.Provider value={tasksList}>
      <TasksDipatchContext.Provider value={dispatch}>
        {children}
      </TasksDipatchContext.Provider>
    </TasksListContext.Provider>
  );
};

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
