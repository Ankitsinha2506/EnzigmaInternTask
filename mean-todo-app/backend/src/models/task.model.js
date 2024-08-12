import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    assignedTo: {
        type: String,
        require: true
    },
    status: {
        type: String,
        require: true,
    },
    dueDate: {
        type: String,
        require: true
    },
    priority: {
        type: String,
        require: true
    },
    comment: {
        type: String,
        require: true

    }
})

const Task = mongoose.model("Task", taskSchema);

export default Task;