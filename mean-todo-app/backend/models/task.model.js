import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description:{
        type: String
    },
    status:{
        type:String,
        enum: ["Not Started", "inProgress", "Completed"],
        default: "Not Started",
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
})

const Task = mongoose.model("Task", taskSchema);

export default Task;