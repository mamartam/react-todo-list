function FormForAddNewItem({
  setTask,
  setTodoList,
  todoList,
  task,
  handleInput,
}) {
  function handleSubmit(event) {
    event.preventDefault();
    let newTask = { id: crypto.randomUUID(), body: task, isDone: false };
    setTodoList([...todoList, newTask]);
    setTask("");
  }

  return (
    <form onSubmit={handleSubmit} className="todoform">
      <label className="todoform__label" htmlFor="new-todo">
        Enter New Task:
      </label>
      <input
        className="todoform__input"
        type="text"
        name="new-todo"
        id="new-todo"
        value={task}
        onChange={handleInput}
        required
        placeholder="Enter new item..."
      />
      <button className="todoform__btn" type="submit">
        Add
      </button>
    </form>
  );
}
export default FormForAddNewItem;
