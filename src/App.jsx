import { useEffect, useState } from "react";
import FormForAddNewItem from "./components/FormForAddNewItem";
import NavButtons from "./components/NavButtons";
import ToDoList from "./components/ToDoList";

function App() {
  // Hooks
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

  // Functions

  // Function to listent to inputed value
  function handleInput(event) {
    setTask(event.target.value);
  }
  // Function for deleting items
  function handleDelete(idOfItem) {
    let newArray = todoList.filter((item) => item.id !== idOfItem);
    setTodoList(newArray);
  }
  // Handle chckbox function
  function handleCheck(checkedId) {
    let newList = todoList.map((item) => {
      if (checkedId === item.id) {
        return { ...item, isDone: !item.isDone };
      }
      return item;
    });
    setTodoList(newList);
  }
  // Function for handeling radio buttons (nav buttons)
  function handleRadio(event) {
    setActiveRadio(event.target.id);
  }
  // Function for filtering list
  const filteredTodos = todoList.filter((item) => {
    if (activeRadio === "active") return !item.isDone;
    if (activeRadio === "completed") return item.isDone;
    return true;
  });

  // Props
  return (
    <>
      <main className="main">
        <h1 className="main__title">My Todo List</h1>
        <FormForAddNewItem
          setTask={setTask}
          setTodoList={setTodoList}
          todoList={todoList}
          task={task}
          handleInput={handleInput}
        />

        <NavButtons activeRadio={activeRadio} handleRadio={handleRadio} />

        <ToDoList
          filteredTodos={filteredTodos}
          handleDelete={handleDelete}
          handleCheck={handleCheck}
        />
      </main>
    </>
  );
}

export default App;
