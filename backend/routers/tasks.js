const express = require('express');
const router = express.Router();
const { getTasks,addTask,updateTask } = require('../controllers/tasks.js');

//-----------------------------------------------------------------------//

//GET all tasks (list the tasks)
router.get('/tasks',getTasks);

//ADD a new task (post a task)
router.post('/task/new',addTask);
//UPDATE a task - status/states & name
router.put('/task/:taskID',updateTask);

export default router;

