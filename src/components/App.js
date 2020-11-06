import React, { useState } from "react";
import "./../styles/App.css";

function Task({ currentIndex, handleEdit, handleDelete, element }) {
  const [shouldEdit, setShouldEdit] = useState(false);
  const [currentTask, setCurrentTask] = useState("");

  const currentTaskChange = (event) => {
    setCurrentTask(event.target.value);
  };

  const handleSave = () => {
    if (currentTask.length === 0) {
      return;
    }
    handleEdit(currentIndex, currentTask);
    setCurrentTask("");
    setShouldEdit(false);
  };

  const editTask = () => setShouldEdit(true);
  const deleteTask = () => handleDelete(currentIndex);

  return (
    <>
    <li className="list">
      {element}
      </li>
      <button className="edit" onClick={editTask}>
        E
      </button>
      <button className="delete" onClick={deleteTask}>
        D
      </button>
      {shouldEdit ? (
        <>
          <textarea
            id="task"
            onChange={currentTaskChange}
            value={currentTask}
          ></textarea>
          <button id="btn" onClick={handleSave}>
            +
          </button>
        </>
      ) : null}
      </>
    
  );
}

function App() {
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
    <div id="main">
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
    </div>
  );
}

export default App;
