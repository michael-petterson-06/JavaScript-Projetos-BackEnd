const connection = require("./connection");
const { ObjectId } = require('mongodb');

const getAllTasks = () => connection().then(
  db => db.collection('TASKS').find().toArray()
)

const createTask = async ({message, status}) => {
  return connection()
    .then((db) => db.collection('TASKS').insertOne({ message, status }))
    .then((response) => response.ops[0]);
};

const update = async (id, message, status) => {
  if (!ObjectId.isValid(id)) return null;

  return connection()
    .then((db) => db.collection('TASKS')
      .update({ _id: new ObjectId(id) }, { message, status }))
    .then(() => ({ _id: id, message, status }));
};

const getById = async (id) => {
  if (!ObjectId.isValid(id)) return null;

  return connection()
    .then((db) => db.collection('TASKS').findOne(new ObjectId(id)));
};

const remove = async (id) => {
  if (!ObjectId.isValid(id)) return null;
  const taskToBeRemoved = await getById(id);
  return connection()
    .then((db) => db.collection('TASKS').deleteOne({ _id: new ObjectId(id) }))
    .then(() => taskToBeRemoved);
};

module.exports = {
  getAllTasks,
  createTask,
  update,
  remove,
}