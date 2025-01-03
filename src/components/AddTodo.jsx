import { useState } from "react";
import styles from "./AddTodo.module.css";

function AddTodo({ onNewItem }) {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddBtnClick = () => {
    onNewItem(title, dueDate);
    setTitle("");
    setDueDate("");
  };

  return (
    <div className="container">
      <div className="row row-margin">
        <div className="col-4">
          <input
            className={styles.input}
            type="text"
            value={title}
            placeholder="Enter the Task"
            onChange={handleTitleChange}
          />
        </div>
        <div className="col-4">
          <input
            className={styles.input}
            type="date"
            value={dueDate}
            onChange={handleDateChange}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success"
            onClick={handleAddBtnClick}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
