import express from 'express';
import { addTask, getTask } from '../controllers/task.contoller.js';

const router = express.Router()

router.get("/", getTask);
router.post("/", addTask);


export default router;