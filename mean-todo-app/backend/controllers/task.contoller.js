import Task from "../models/task.model.js";

// Fetch All Task.
export const getTask = async (req, res) => {
    try {
        const task = await Task.find();
        res.status(200).json({ message: "Data fetched Successfully", task })

    } catch (error) {
        console.log("Error: " + error);
        res.status(500).json({ message: error.message })
    }
}

// Add Task.
export const addTask = async (req, res) => {

    try {
        const { title, description, status, createdAt, updatedAt } = req.body;
        const newTask = new Task({ title, description, createdAt, updatedAt });
        await newTask.save();
        res.status(201).json({ message: "Task Added Successfully", newTask });
    }
    catch (error) {
        console.log("Error: " + error);
        res.status(500).json({ error: "An error occurred while adding the task" });
    }
}

//APIs for update task.
export const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, status, createdAt, updatedAt } = req.body;
        const task = await Task.findByIdAndUpdate(id, { title, description, status, createdAt, updatedAt },
            { new: true });
        res.status(200).json({ message: "Task Updated Successfully", task });
    }
    catch (error) {
        console.log("Error: " + error);
        res.status(500).json({ error: "An error occurred while updating the task" });
    }
}

// APIs for Delete Task.
export const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByIdAndDelete(id);
        res.status(200).json({ message: "Task Deleted Successfully", task });
    }
    catch (error) {
        console.log("Error: " + error);
        res.status(500).json({ error: "An error occurred while deleting the task." })
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