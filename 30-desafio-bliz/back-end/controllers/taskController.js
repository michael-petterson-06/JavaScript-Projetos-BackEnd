const taskService = require('../services/taskService');

const success = 200;
const errCode = 'Campo Obrigatório';
const errType = 422;

const createTask = async (req, res) => {
  const  { message, status }  = req.body;
    if (!message) {
      return res.json({
        err: {
          code: errCode,
           data: { errType },
         },
     }); 
   }
   const newTask = await taskService.createTask({message, status});
   return res.status(success).json(newTask);
 };
 
  const getAll = async (_req, res) => {
    const allTalsks = await taskService.getAll();
    return res.status(200).json(allTalsks);
  };

  const update = async (req, res) => {
    const { id } = req.params;
    const { message, status } = req.body;
    if (!message) {
      return res.json({
        err: {
          code: errCode,
           data: { errType },
         },
     }); 
   }
   const updatedTalsk = await taskService.update(id, message, status);
    return res.status(success).json(updatedTalsk);
  };
  
  const remove = async (req, res) => {
    const { id } = req.params;
    const success = 200;
    const taskRemove = await taskService.remove(id);
    return res.status(success).json(taskRemove);
  };

module.exports = { 
  createTask,
  getAll,
  update,
  remove,
};
