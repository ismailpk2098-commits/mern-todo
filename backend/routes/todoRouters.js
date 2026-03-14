

import express from "express"

import protect from "../middleware/authMiddleware.js"
import { getTodos,addTodos,toggleTodo,deleteTodo } from "../controllers/todoController.js"


const router=express.Router()

router.get('/',protect,getTodos)
router.post('/',protect,addTodos)
router.put('/:id',protect,toggleTodo)
router.delete('/:id',protect,deleteTodo)

export default router;
