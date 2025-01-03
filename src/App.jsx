import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";

import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const onNewItem = (title, dueDate) => {
    const newItems = [...todoItems, { title: title, dueDate: dueDate }];
    setTodoItems(newItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const itemsAfterDelete = todoItems.filter(
      (item) => item.title !== todoItemName
    );
    setTodoItems(itemsAfterDelete);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={onNewItem} />
      {todoItems.length === 0 && <WelcomeMessage />}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
    </center>
  );
}

export default App;
