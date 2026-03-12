import React, { useState, useContext } from "react";
import API from "../api/axios";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
  const { user } = useContext(AuthContext); // ✅ get logged-in user
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await API.post("/users/register", {
        name,
        email,
        password,
      });
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      alert("Username Already Exists");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div
        className="card p-4 shadow"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        {/* ✅ Dynamic Back button based on logged-in user */}
        <Link
          to={user ? "/dashboard" : "/"}
          className="btn btn-secondary mb-3"
        >
          Back
        </Link>

        <h2 className="text-center mb-4 text-primary">Register</h2>

        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="btn btn-success w-100" onClick={handleRegister}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Register;