const tasksReducer = (tasks, action) => {
  switch (action.type) {
    case "task_added": {
      return [...tasks, { ...action.task, id: tasks.length + 1 }];
    }
    case "task_edited":
      return tasks.map((t) => (t.id === action.task.id ? action.task : t));
    case "task_deleted":
      return tasks.filter((t) => t.id !== action.taskId);
    default:
      return tasks;
  }
};

export default tasksReducer;
