const express = require('express');
const router = express.Router();
const { getTasks,addTask,updateTask } = require('../controllers/tasks.js');

//-----------------------------------------------------------------------//

//GET all tasks (list the tasks)
router.get('/api/v1/tasks',getTasks);

//ADD a new task (post a task)
router.post('/api/v1/task/new',addTask);
//UPDATE a task - status/states & name
router.put('/api/v1/task/:taskID',updateTask);

export default router;

