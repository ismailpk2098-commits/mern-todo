import React, { useEffect, useState } from "react";
import API from "../api/axios";
import { Link } from "react-router-dom";

function ShowData() {
  const [users, setUsers] = useState([]);
  console.log(users);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await API.get("/users/allUser");
        setUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    try {
      await API.delete(`/users/user/${id}`);
      setUsers(users.filter(u => u._id !== id));
    } catch (error) {
      console.log(error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-primary">User List</h2>
        <Link to="/dashboard" className="btn btn-secondary">
          Back
        </Link>
      </div>

      {users.length === 0 ? (
        <p className="text-center">No users found.</p>
      ) : (
        <div className="row g-3">
          {users.map(u => (
            <div key={u._id} className="col-md-6">
              <div className="card shadow-sm p-3">
                <h5 className="card-title">Name: {u.name}</h5>
                <p className="card-text">Email: {u.email}</p>
               
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(u._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ShowData;