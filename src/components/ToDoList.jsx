function ToDoList({ filteredTodos, handleDelete, handleCheck }) {
  return (
    <ul className="list">
      {filteredTodos.map((item) => (
        <li key={item.id} className="list__item">
          <div className="list__item-box">
            <input
              type="checkbox"
              id={item.id}
              checked={item.isDone}
              onChange={() => handleCheck(item.id)}
            />
            <label htmlFor={item.id}>{item.body}</label>
          </div>
          <button onClick={() => handleDelete(item.id)} type="button">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ToDoList;
