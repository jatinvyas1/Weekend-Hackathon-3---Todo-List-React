import React, { useState } from "react";

function TodoList() {
  let [tasks, setTasks] = useState([]);
  const handleClick = () => {
    const taskArea = document.getElementById("task");
    if (taskArea.value === "") {
      return;
    }
    setTasks([...tasks, taskArea.value]);
  };
  const handleEdit = (index) => {
    console.log(index);
  };
  const handleDelete = (index) => {
    console.log(index);
  };

  return (
    <>
      <textarea id="task"></textarea>
      <button id="btn" onClick={handleClick}></button>
      {tasks.map((element, index) => {
        return (
          <div className="list" key={index}>
            {element}
            <button className="edit" onClick={() => handleEdit(index)}>
              E
            </button>
            <button className="delete" onClick={() => handleDelete(index)}>
              D
            </button>
          </div>
        );
      })}
    </>
  );
}

export default TodoList;
