import React, { useState } from "react";
import Task from "./task";

function TodoList() {
  let [tasks, setTasks] = useState([]);
  let [newTask, setNewTask] = useState("");
  const currentTaskChange = (event) => {
    setNewTask(event.target.value);
  };
  const handleClick = () => {
    if (newTask === "") {
      return;
    }
    setTasks([...tasks, newTask]);
    setNewTask("");
  };
  const handleEdit = (indexToChange, newTask) => {
    const temp = [...tasks];
    temp[indexToChange] = newTask;
    setTasks(temp);
  };
  const handleDelete = (indexToDelete) => {
    const temp = tasks.filter((element, index) => index !== indexToDelete);
    setTasks(temp);
  };

  return (
    <>
      <textarea
        id="task"
        onChange={currentTaskChange}
        value={newTask}
      ></textarea>
      <button id="btn" onClick={handleClick}>
        +
      </button>
      {tasks.map((element, index) => {
        return (
          <Task
            key={index}
            currentIndex={index}
            element={element}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        );
      })}
    </>
  );
}

export default TodoList;
