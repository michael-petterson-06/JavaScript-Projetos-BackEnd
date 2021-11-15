const tasksModel = require('../models/tasksModel');

const getAll = async () => tasksModel.getAllTasks()
  .then((data) => (data));


const createTask = async (message, status) => tasksModel.createTask(message, status);

const update = async (id, message, status) => (
  tasksModel.update(id, message, status)
);

const remove = async (id) => tasksModel.remove(id);

module.exports = { 
  getAll,
  createTask,
  update,
  remove,
};