import Task from "../models/task.model.js";

// Fetch All Task.
export const retriveAllTask = async (req, res) => {
    try {
        const allTask = await Task.find();
        res.status(200).json({ message: "All Tasks retrived Successfully....", allTask });
    } catch (error) {
        res.status(500).json({ message: "Error in retriving all tasks", error });
    }
}

// Add Task.
export const addTask = async (req, res) => {

    try {
        const { assignedTo, status, dueDate, priority, comment } = req.body;
        const newTask = new Task({ assignedTo, status, dueDate, priority, comment });
        await newTask.save();
        res.status(201).json({ message: "Task Added Successfully", newTask });
    }
    catch (error) {
        console.log("Error: " + error);
        res.status(500).json({ error: "An error occurred while adding the task", error });
    }
}

//APIs for update task.
export const updateTask = async (req, res) => {
    try {
        const taskId = req.params.id;
        const { assignedTo, status, dueDate, priority, comment } = req.body;
        const updatedTask = await Task.findByIdAndUpdate(taskId, {
            assignedTo, status, dueDate,
            priority, comment
        }, { new: true });
        res.status(200).json({ message: "Task Updated Successfully", updatedTask });
    }
    catch (error) {
        console.log("Error: " + error);
        res.status(500).json({
            error: "An error occurred while updating the task", error
        });
    }
}

// APIs for Delete Task.
export const deleteTask = async(req, res)=>{
    try{
        const taskId = req.params.id;
        const task = await Task.findByIdAndDelete(taskId);
        if(!task) {
            res.status(404).json({error: "Task not found..."})
        }
        await task.deleteOne()
        res.status(200).json({message: "Task deleted Successfully..."})
    } catch(error)  {
        console.log("Error: " + error);
        res.status(500).json({error: "An error occurred while deleting the task", error});
    }
}
// APIs for findById
export const getTaskById = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findById(id);
        res.status(200).json({ message: "Task Found Successfully", task });
    }
    catch (error) {
        console.log("Error: " + error);
        res.status(500).json({ error: "An error occurred while finding the task" });
    }
}