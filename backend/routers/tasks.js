
const router = express.Router();
import { getTasks, addTask, updateTask } from '../controllers/tasks.js';

//-----------------------------------------------------------------------//

//GET all tasks (list the tasks)
router.get('/tasks',() => getTasks);

//ADD a new task (post a task)
router.post('/task/new',() => addTask);
//UPDATE a task - status/states & name
router.put('/task/:taskID',() => updateTask);


export default router;

