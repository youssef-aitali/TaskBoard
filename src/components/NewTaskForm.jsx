import { useState } from "react";
import { useTasks } from "../Contexts/TasksContext";

import "./NewTaskForm.css";

const initialFormData = {
  title: "",
  description: "",
  priority: "",
  dueDate: "2025-04-24",
  assignee: "",
  status: "To Do",
};

const NewTaskForm = () => {
  const {
    tasksList,
    dispatch,
    taskToEditId,
    setTaskToEditId,
    setTaskDialogOpen,
  } = useTasks();

  let currentTask = tasksList.find((t) => t.id === taskToEditId);

  const [formData, setFormData] = useState(
    !currentTask ? initialFormData : currentTask
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: !currentTask ? "task_added" : "task_edited",
      task: {
        ...formData,
      },
    });

    setFormData(initialFormData);
    setTaskToEditId(null);
    setTaskDialogOpen(false);
  };

  return (
    <div className="fixed w-full h-full top-0 left-0 bg-gray-300/80">
      <div className="fixed top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-100 border border-gray-300 rounded-lg">
        <form
          className="flex flex-col bg-white shadow-xl p-5"
          onSubmit={handleSubmit}
        >
          <>
            <label htmlFor="title">Title</label>
            <input
              className="mt-1 mb-2 w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </>
          <>
            <label htmlFor="description">Description</label>
            <textarea
              className="mt-1 mb-2 w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              type="text"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              style={{ resize: "none" }}
            />
          </>
          <>
            <label htmlFor="priority">Priority</label>
            <select
              className="mt-1 mb-2 w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              id="priority"
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              required
            >
              <option value="">Select a priority</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </>
          <>
            <label htmlFor="dueDate">Due Date</label>
            <input
              className="mt-1 mb-2 w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              type="date"
              id="dueDate"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
              required
            />
          </>
          <>
            <label htmlFor="assignee">Assign To</label>
            <select
              className="mt-1 mb-2 w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              id="assignee"
              name="assignee"
              value={formData.assignee}
              onChange={handleChange}
              required
            >
              <option value="">Select an assignee</option>
              <option value="John Doe">John Doe</option>
              <option value="Kate Smith">Kate Smith</option>
              <option value="Sam Wilson">Sam Wilson</option>
              <option value="Lucy Gibson">Lucy Gibson</option>
              <option value="Samantha Brown">Samantha Brown</option>
            </select>
          </>
          <div className="flex justify-center mt-3">
            <button
              className="bg-gray-500 hover:bg-gray-400 text-white text-sm px-4 py-2 mt-2 rounded-sm cursor-pointer font-medium mr-1"
              type="button"
              onClick={() => {
                setTaskToEditId(null);
                setTaskDialogOpen(false);
              }}
            >
              Cancel
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-400 text-white text-sm px-4 py-2 mt-2 rounded-sm cursor-pointer font-medium ml-1"
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewTaskForm;
