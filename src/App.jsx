import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";

function App() {
  return (
    <center class="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <div class="row">
        <div className="col-4">Wake up at 7:30 AM</div>
        <div className="col-4">12/12/2024</div>
        <div className="col-2">
          <button type="button" class="btn btn-danger">
            Delete
          </button>
        </div>
      </div>

      <div class="row">
        <div className="col-4">Code atleast half an hour a day</div>
        <div className="col-4">10/12/2024</div>
        <div className="col-2">
          <button type="button" class="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </center>
  );
}

export default App;
