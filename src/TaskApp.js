import React, { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import tasks from "./tasks.js";


const TaskApp = () => {
  const [taskList, setTaskList] = useState(tasks);

  const addTask = (newTask) => {
    const newTaskList = [...taskList, { ...newTask, id: Date.now() }];
    setTaskList(newTaskList);
  };


  const deleteTask = (taskId) => {
    const updatedTaskList = taskList.filter((task) => task.id !== taskId);
    setTaskList(updatedTaskList);
  };

  const updateTask = (taskId, updatedTask) => {
    const updatedTaskList = taskList.map((task) =>
      task.id === taskId ? { ...task, ...updatedTask } : task
    );
    setTaskList(updatedTaskList);
  };

  return (
    <div className="container">
      <h1>Task Management App</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={taskList} deleteTask={deleteTask}  updateTask={updateTask}/>
    </div>
  );
};

export default TaskApp;
