import API from "./axios";

export const getTodos = () => API.get("/todos");

export const addTodo = (data) => API.post("/todos",data);

export const deleteTodo = (id) => API.delete(`/todos/${id}`);

export const toggleTodo = (id) => API.put(`/todos/${id}`);