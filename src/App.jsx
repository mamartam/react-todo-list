import { useEffect, useState } from "react";

function App() {
  const [activeRadio, setActiveRadio] = useState("all");
  const [todoList, setTodoList] = useState(() => {
    const saved = localStorage.getItem("my-todos");
    return saved
      ? JSON.parse(saved)
      : [{ id: crypto.randomUUID(), body: "Read a book", isDone: true }];
  });

  useEffect(() => {
    localStorage.setItem("my-todos", JSON.stringify(todoList));
  }, [todoList]);

  const [task, setTask] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let newTask = { id: crypto.randomUUID(), body: task, isDone: false };
    setTodoList([...todoList, newTask]);
    setTask("");
  }

  function handleInput(event) {
    setTask(event.target.value);
  }

  function handleDelete(idOfItem) {
    let newArray = todoList.filter((item) => item.id !== idOfItem);
    setTodoList(newArray);
  }

  function handleCheck(checkedId) {
    let newList = todoList.map((item) => {
      if (checkedId === item.id) {
        return { ...item, isDone: !item.isDone };
      }
      return item;
    });
    setTodoList(newList);
  }

  function handleRadio(event) {
    setActiveRadio(event.target.id);
  }
  const filteredTodos = todoList.filter((item) => {
    if (activeRadio === "active") return !item.isDone;
    if (activeRadio === "completed") return item.isDone;
    return true;
  });

  return (
    <>
      <main className="main">
        <h1 className="main__title">My Todo List</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="new-todo">Enter New Task:</label>
          <input
            type="text"
            name="new-todo"
            id="new-todo"
            value={task}
            onChange={handleInput}
            required
          />
          <button type="submit">Add</button>
        </form>

        <div>
          <label htmlFor="all">All</label>
          <input
            type="radio"
            name="radio-btn"
            id="all"
            checked={activeRadio === "all"}
            onChange={handleRadio}
          />
          <label htmlFor="active">Active</label>
          <input
            type="radio"
            name="radio-btn"
            id="active"
            checked={activeRadio === "active"}
            onChange={handleRadio}
          />
          <label htmlFor="completed">Completed</label>
          <input
            type="radio"
            name="radio-btn"
            id="completed"
            checked={activeRadio === "completed"}
            onChange={handleRadio}
          />
        </div>
        <ul>
          {filteredTodos.map((item) => (
            <li key={item.id}>
              <input
                type="checkbox"
                id={item.id}
                checked={item.isDone}
                onChange={() => handleCheck(item.id)}
              />
              <label htmlFor={item.id}>{item.body}</label>
              <button onClick={() => handleDelete(item.id)} type="button">
                Delete
              </button>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;
