import TodoItem from "./TodoItem";
function TodoItems({ todoItems, onDeleteClick }) {
  return (
    <>
      <div className="container">
        {todoItems.map((item) => (
          <TodoItem
            key={item}
            title={item.title}
            dueDate={item.dueDate}
            onDeleteClick={onDeleteClick}
          ></TodoItem>
        ))}
      </div>
    </>
  );
}

export default TodoItems;
