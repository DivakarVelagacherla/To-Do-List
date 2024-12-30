import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";

import "./App.css";

function App() {
  let content = [
    {
      title: "Buy Milk",
      dueDate: "10/10/90",
    },
    {
      title: "Do Fun",
      dueDate: "10/10/10",
    },
    {
      title: "Have Fun",
      dueDate: "10/10/11",
    },
  ];

  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <TodoItems todoItems={content}></TodoItems>
    </center>
  );
}

export default App;
