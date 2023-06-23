import React, { useState } from "react";

const UpdateTaskForm = ({ task, updateTask }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [dueDate, setDueDate] = useState(task.dueDate);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update the task
    updateTask(task.id, { title, description, dueDate });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
      <div className="form-group">
      <input
      className="form-control col-4"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
       </div>
      <div className="form-group">
      <input
      className="form-control col-4"
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
       </div>
      <div className="form-group">
      <input
      className="form-control col-4"
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
       </div>
      <button className="btn btn-info"  type="submit">Update Task</button>
      </div>
    </form>
  );
};

export default UpdateTaskForm;
