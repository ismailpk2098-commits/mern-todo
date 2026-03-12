import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true
});
export const getTodos = () => API.get("/todos");

export const addTodo = (data) => API.post("/todos",data);

export const deleteTodo = (id) => API.delete(`/todos/${id}`);

export const toggleTodo = (id) => API.put(`/todos/${id}`);
export default API;