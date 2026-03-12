import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

function Dashboard() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="container my-5">
      <div className="card p-4 shadow" style={{ maxWidth: "500px", margin: "auto" }}>
        <h1 className="text-center text-primary mb-4">
          Welcome, {user?.name}
        </h1>

        <div className="d-grid gap-2">
          <Link to="/todo" className="btn btn-success btn-lg">
            Todo
          </Link>
          {/* <Link to="/allusers" className="btn btn-info btn-lg text-white">
            Show Users
          </Link> */}
          <Link to="/register" className="btn btn-warning btn-lg text-white">
            Register
          </Link>
          <button onClick={logout} className="btn btn-danger btn-lg">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;