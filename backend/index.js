const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const taskRoutes = require('./src/routes/task.route');

// const {
//   getTasks,
//   createTask,
//   updateTask,
//   deleteTask,
// } = require("./src/controllers/task.controller");

// console.log(getTasks, createTask, updateTask, deleteTask);

// const taskModel = require('./src/models/task.model')
// console.log(taskModel);

// const TaskService = require("./src/services/task.service");

// const TaskServiceInstance = new TaskService();
// console.log(
//   TaskServiceInstance.find,
//   TaskServiceInstance.create,
//   TaskServiceInstance.update,
//   TaskServiceInstance.delete
// );

//This middleware enables CORS for all routes, allowing your server to accept requests from different origins.
app.use(cors());
//This middleware parses incoming requests with JSON payloads, allowing you to easily handle JSON data in your request body.
app.use(express.json());
//And paste the below line after app.use(express.json);
app.use('/tasks', taskRoutes);
const app = express();
const PORT = process.env.PORTUSED;
const DB_URI = process.env.MONGODB_URL;
console.log('hello world', DB_URI, PORT);
// 'mongodb://localhost:27017/task-manager'

// MongoDB connection  It uses promises to handle the success or failure of the connection.
mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to the task-manager database');
  })
  .catch((err) => {
    console.error('Database connection error:', err);
  });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
