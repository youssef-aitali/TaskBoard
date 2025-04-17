import "./NewTaskForm.css";

const NewTaskForm = () => {
  return (
    <div className="newTaskForm-container">
      <form>
        <>
          <label for="fname">Title</label>
          <input type="text" id="fname" name="fname" value="John" />
        </>
        <>
          <label for="lname">Description</label>
          <textarea type="text" id="lname" name="lname" value="Doe" />
        </>
        <>
          <label for="priority">Priority</label>
          <select id="prioriy">
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </>
        <>
          <label for="lname">Due Time</label>
          <input type="date" id="lname" name="lname" value="Doe" />
        </>
        <>
          <label for="lname">Assign To</label>
          <select id="prioriy">
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
