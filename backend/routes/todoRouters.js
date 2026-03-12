// import express from "express";
// import Todo from "../models/Todo.js";
// import protect from "../middleware/authMiddleware.js";

// const router = express.Router();

// // Get todos only for logged-in user
// router.get("/", protect, async (req, res) => {
//   try {
//     const todos = await Todo.find({ userId: req.user._id });
//     res.json(todos);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Add todo
// router.post("/", protect, async (req, res) => {
//   const { task, startDate, finishDate } = req.body;
//   try {
//     const todo = new Todo({
//       userId: req.user._id,
//       task,
//       startDate,
//       finishDate,
//     });
//     await todo.save();
//     res.status(201).json(todo);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Toggle todo completed
// router.put("/:id", protect, async (req, res) => {
//   try {
//     const todo = await Todo.findById(req.params.id);
//     if (!todo) return res.status(404).json({ message: "Todo not found" });
//     if (todo.userId.toString() !== req.user._id.toString())
//       return res.status(403).json({ message: "Not allowed" });

//     todo.completed = !todo.completed;
//     await todo.save();
//     res.json(todo);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Delete todo
// router.delete("/:id", protect, async (req, res) => {
//   try {
//     const todo = await Todo.findById(req.params.id);
//     if (!todo) return res.status(404).json({ message: "Todo not found" });
//     if (todo.userId.toString() !== req.user._id.toString())
//       return res.status(403).json({ message: "Not allowed" });

//     await todo.delete();
//     res.json({ message: "Todo deleted" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// export default router;

import express from "express"

import protect from "../middleware/authMiddleware.js"
import { getTodos,addTodos,toggleTodo,deleteTodo } from "../controllers/todoController.js"


const router=express.Router()

router.get('/',protect,getTodos)
router.post('/',protect,addTodos)
router.put('/:id',protect,toggleTodo)
router.delete('/:id',protect,deleteTodo)

export default router;