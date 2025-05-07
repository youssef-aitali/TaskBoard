import { createContext, useReducer, useState, useContext } from "react";
import tasksReducer from "../reducers/tasksReducer";
import { initialTasksList } from "../data/initialTasks";

export const TasksContext = createContext({
  tasksList: [],
  dispatch: () => {},
  taskToEditId: null,
  setTaskToEditId: () => {},
  taskDialogOpen: false,
  setTaskDialogOpen: () => {},
});

export const TasksProvider = ({ children }) => {
  const [tasksList, dispatch] = useReducer(tasksReducer, initialTasksList);
  const [taskToEditId, setTaskToEditId] = useState(null);
  const [taskDialogOpen, setTaskDialogOpen] = useState(false);

  const value = {
    tasksList,
    dispatch,
    taskToEditId,
    setTaskToEditId,
    taskDialogOpen,
    setTaskDialogOpen,
  };

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TasksContext);
  if (!context) throw new Error("useTasks must be used within TasksProvider");
  return context;
};
