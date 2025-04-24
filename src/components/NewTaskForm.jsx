import { useState } from "react";
import "./NewTaskForm.css";

const NewTaskForm = () => {

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: '', // for date of birth
    dueTime: '2025-04-24',
    assignee: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="newTaskForm-container">
      <form onSubmit={()=> alert("Saving...")}>
        <>
          <label htmlFor="fname">Title</label>
          <input type="text" id="fname" name="fname" value={formData.title} onChange={handleChange} required/>
        </>
        <>
          <label htmlFor="lname">Description</label>
          <textarea type="text" id="lname" name="lname" value={formData.description} onChange={handleChange} required />
        </>
        <>
          <label htmlFor="priority">Priority</label>
          <select id="prioriy" value={formData.priority} onChange={handleChange} required>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </>
        <>
          <label htmlFor="lname">Due Time</label>
          <input type="date" id="lname" name="lname" value={formData.dueTime} onChange={handleChange} required />
        </>
        <>
          <label htmlFor="lname">Assign To</label>
          <select id="prioriy" value={formData.assignee} onChange={handleChange} required>
            <option value="John Doe">John Doe</option>
            <option value="Kate Smith">Medium</option>
            <option value="Sam Wilson">Sam Wilson</option>
            <option value="Lucy Gibson">Lucy Gibson</option>
            <option value="Samantha Brown">Samantha Brown</option>
          </select>
        </>
        <input type="submit" value="Save" />
      </form>
    </div>
  );
};

export default NewTaskForm;
