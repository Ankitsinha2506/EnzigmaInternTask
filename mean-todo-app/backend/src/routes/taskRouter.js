import express from 'express';
import { addTask, deleteTask, getTaskById, retriveAllTask, updateTask } from '../controllers/task.contoller.js';

const router = express.Router()

router.get("/", retriveAllTask);
router.post("/", addTask);
router.put('/edit/:id', updateTask);
router.delete("/edit/:id", deleteTask)
router.get("/:id", getTaskById)


export default router;