import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { getTodos, addTodo, deleteTodo, toggleTodo } from "../api/todoApi";
import { Link } from "react-router-dom";

function TodoForm() {

  const [task, setTask] = useState("");
  const [startDate, setStartDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [finishDate, setFinishDate] = useState("");

  const [todos, setTodos] = useState([]);

  const { user, logout } = useContext(AuthContext);

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    const res = await getTodos();
    setTodos(res.data);
  };

  const handleAdd = async () => {
    if (task.trim() === "") return alert("Please Enter your Task");

    await addTodo({
      task,
      startDate,
      finishDate
    });

    setTask("");
    setStartDate(new Date().toISOString().split("T")[0]);
    setFinishDate("");

    loadTodos();
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
    loadTodos();
  };

  const handleToggle = async (id) => {
    await toggleTodo(id);
    loadTodos();
    console.log(user)
  };

  const getBalanceDays = (finishDate) => {
    const today = new Date();
    const end = new Date(finishDate);

    const diff = end - today;
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

    if (days < 0) return "Expired";
    return days + " days";
  };

  return (
    <div className="container my-5">

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1 className="text-primary">Todo App</h1>
        <div>
          <Link to="/dashboard" className="btn btn-outline-secondary me-2">Home</Link>
          <button className="btn btn-danger" onClick={logout}>Logout</button>
        </div>
      </div>

      <div className="card p-3 mb-4 shadow-sm">
        <div className="row g-2">
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
          </div>

          <div className="col-md-3">
            <input
              type="date"
              className="form-control"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>

          <div className="col-md-3">
            <input
              type="date"
              className="form-control"
              value={finishDate}
              onChange={(e) => setFinishDate(e.target.value)}
            />
          </div>

          <div className="col-md-2 d-grid">
            <button className="btn btn-success" onClick={handleAdd}>Add</button>
          </div>
        </div>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered table-hover text-center align-middle">
          <thead className="table-dark">
            <tr>
              <th>No</th>
              <th>Start Date</th>
              <th>Task</th>
              <th>Finish Date</th>
              <th>Balance</th>
              <th>Complete</th>
              <th>Status</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, index) => (
              <tr key={todo._id}>
                <td>{index + 1}</td>
                <td>{todo.startDate}</td>
                <td>{todo.task}</td>
                <td>{todo.finishDate}</td>
                <td>{getBalanceDays(todo.finishDate)}</td>
                <td>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    checked={todo.completed}
                    onChange={() => handleToggle(todo._id)}
                  />
                </td>
                <td className={todo.completed ? "text-success fw-bold" : "text-danger fw-bold"}>
                  {todo.completed ? "Completed ✅" : "Not Completed ❌"}
                </td>
                <td>
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => handleDelete(todo._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default TodoForm;