import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form inputs
    if (!title.trim() || !description.trim() || !dueDate) {
      setErrors({
        title: !title.trim() ? "Title is required" : "",
        description: !description.trim() ? "Description is required" : "",
        dueDate: !dueDate ? "Due date is required" : "",
      });
      return;
    }

    // Check if due date is in the past
    const currentDate = new Date().toISOString().split("T")[0];
    if (dueDate < currentDate) {
      setErrors({
        ...errors,
        dueDate: "Due date cannot be in the past",
      });
      return;
    }

    // Add the task
    addTask({ title, description, dueDate });

    // Reset form inputs and errors
    setTitle("");
    setDescription("");
    setDueDate("");
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit}>
    <div className="container">
      <div className="form-group">
      <input
      className="form-control col-4"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {errors.title && <span className="error">{errors.title}</span>}
      </div>
      <div className="form-group">
      <input
      className="form-control col-4"
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      {errors.description && <span className="error">{errors.description}</span>}
      </div>
      <div className="form-group">
      <input
      className="form-control col-4"
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      {errors.dueDate && <span className="error">{errors.dueDate}</span>}
      </div>
      <br></br>
      <button className="btn btn-info" type="submit">Add Task</button>
      </div>
    </form>
  );
};

export default TaskForm;
