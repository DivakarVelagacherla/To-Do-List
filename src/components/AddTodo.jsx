function AddTodo() {
  return (
    <div class="container text-centre">
      <div class="row">
        <div className="col-4">
          <input type="text" placeholder="Enter the Task" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button type="button" class="btn btn-success">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
