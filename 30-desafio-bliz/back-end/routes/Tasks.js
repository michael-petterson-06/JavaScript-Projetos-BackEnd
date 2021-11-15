const express = require('express');
const Task = require('../controllers/taskController');

const TasksRouter = express.Router();

TasksRouter.post('/', Task.createTask);
TasksRouter.get('/', Task.getAll);
TasksRouter.put('/:id', Task.update);
TasksRouter.delete('/:id', Task.remove);

module.exports = TasksRouter;