import axios from "axios";

const API = axios.create({
  baseURL: "https://mern-todo-backend-6hzd.onrender.com",
  withCredentials: true
});
export const getTodos = () => API.get("/todos");

export const addTodo = (data) => API.post("/todos",data);

export const deleteTodo = (id) => API.delete(`/todos/${id}`);

export const toggleTodo = (id) => API.put(`/todos/${id}`);
export default API;
