import React, { useState } from "react";

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
    <div className="list">
      {element}
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
    </div>
  );
}

export default Task;
