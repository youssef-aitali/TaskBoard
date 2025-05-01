const tasksReducer = (tasks, action) => {
  switch (action.type) {
    case "task_added": {
      return {
        ...tasks,
        ["To Do"]: [...tasks["To Do"], { ...action.task }],
      };
    }
    case "task_edited":
    case "task_deleted":
    case "task_moved":
  }
};

export default tasksReducer;
