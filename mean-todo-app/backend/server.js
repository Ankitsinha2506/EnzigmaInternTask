import express from 'express'
// import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

import taskRoute from './routes/taskRouter.js'

const app = express();
app.use(express.json());

const PORT = 4000;


// dotenv.config();

// const PORT =  process.env.PORT || 5000 ;
// const URI = process.env.MongoDBURI;

// Connect to MongoDB.
mongoose.connect(
    'mongodb://localhost:27017/mean-todo-app', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>console.log("MongoDb Connected...."))
.catch((err)=>console.log("Connection error : "+err)
)

// Connect to MongoDB.
/*
try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log("Connected to MongoDB");
    
} catch (error) {
    console.log("Error Connecting to MongoDB " + error);
}
*/

// Defining Routes.
app.use("/task", taskRoute);

// App listening.
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})