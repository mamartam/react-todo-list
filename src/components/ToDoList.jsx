function ToDoList({ filteredTodos, handleDelete, handleCheck }) {
  return (
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
  );
}

export default ToDoList;
