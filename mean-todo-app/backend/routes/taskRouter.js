import express from 'express';
import { addTask, deleteTask, getTask, updateTask } from '../controllers/task.contoller.js';

const router = express.Router()

router.get("/", getTask);
router.post("/", addTask);
router.put('/edit/:id', updateTask);
router.delete("/edit/:id", deleteTask)


export default router;