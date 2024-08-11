import Task from "../models/task.model.js";

// Fetch All Task.
export const getTask = async(req, res)=>{
    try {
        const task = await Task.find();
        res.status(200).json(task)

    } catch (error) {
        console.log("Error: "+error);
        res.status(500).json({message: error.message})   
    }
}

// Add Task.
export const addTask = async(req, res)=>
    {

    try {
        const {title, description, status, createdAt, updatedAt} = req.body;
        const newTask = new Task({title, description, createdAt, updatedAt});
        await newTask.save();
        res.status(201).json({message: "Task Added Successfully", newTask});
    }
    catch (error) {
        console.log("Error: "+error);
        res.status(500).json({ error: "An error occurred while adding the task" });
    }
}
