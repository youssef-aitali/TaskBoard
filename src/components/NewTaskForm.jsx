import { useState } from "react";
import "./NewTaskForm.css";

const initialFormData = {
  title: "",
  description: "",
  priority: "",
  dueDate: "2025-04-24",
  assignee: "",
  status: "To Do",
};

const NewTaskForm = ({
  currentTask,
  onAddNewTask,
  onEditTask,
  onCloseTaskDialog,
}) => {
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
    !currentTask
      ? onAddNewTask({
          ...formData,
        })
      : onEditTask(formData);
    setFormData(initialFormData);
  };

  return (
    <div className="newTaskForm-container">
      <form onSubmit={handleSubmit}>
        <>
          <label htmlFor="title">Title</label>
          <input
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
        <input type="submit" value="Save" />
        <input
          type="button"
          value="Cancel"
          onClick={() => onCloseTaskDialog(false)}
        />
      </form>
    </div>
  );
};

export default NewTaskForm;
