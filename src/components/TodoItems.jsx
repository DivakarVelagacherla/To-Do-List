import TodoItem from "./TodoItem";
function TodoItems({ todoItems }) {
  return (
    <>
      <div className="container">
        {todoItems.map((item) => (
          <TodoItem
            key={item}
            title={item.title}
            dueDate={item.dueDate}
          ></TodoItem>
        ))}
      </div>
    </>
  );
}

export default TodoItems;
