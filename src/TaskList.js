import React, { useState } from "react";
import UpdateTaskForm from "./UpdateTaskForm";

const TaskList = ({ tasks, deleteTask, updateTask }) => {
  const [editTaskId, setEditTaskId] = useState(null);

  const handleDelete = (taskId) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      deleteTask(taskId);
    }
  };

  const handleEdit = (taskId) => {
    setEditTaskId(taskId);
  };

  const handleUpdate = (taskId, updatedTask) => {
    updateTask(taskId, updatedTask);
    setEditTaskId(null);
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Due Date</th>
          <th>Actions</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr key={task.id}>
            {editTaskId === task.id ? (
              <td colSpan="4">
                <UpdateTaskForm task={task} updateTask={handleUpdate} />
              </td>
            ) : (
              <>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>{task.dueDate}</td>
                <td><button className="btn btn-danger ml-3" onClick={() => handleDelete(task.id)}>Delete</button></td>
                <td><button className="btn btn-primary"onClick={() => handleEdit(task.id)}>Edit</button></td>
              </>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TaskList;
