function TodoItem({ title, dueDate }) {
  return (
    <div className="item-container">
      <div className="row row-margin">
        <div className="col-4">{title}</div>
        <div className="col-4">{dueDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
