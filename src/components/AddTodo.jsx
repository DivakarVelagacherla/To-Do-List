import styles from "./AddTodo.module.css";

function AddTodo() {
  return (
    <div className="container">
      <div className="row row-margin">
        <div className="col-4">
          <input
            className={styles.input}
            type="text"
            placeholder="Enter the Task"
          />
        </div>
        <div className="col-4">
          <input className={styles.input} type="date" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
