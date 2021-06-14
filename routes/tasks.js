import Router from 'express';
import { retreiveTasksFromAPI } from '../controllers/retreiveTasksFromAPI'
import { getTasks } from '../controllers/getTasks'
import { markTaskAsDone } from '../controllers/markTaskAsDone'

const router = Router();

router.get('/retreiveTasksFromAPI', async (req, res, next) => { await retreiveTasksFromAPI(req, res, next) });
router.get('/tasks', async (req, res, next) => { await getTasks(req, res, next) });
router.put('/tasks', async (req, res, next) => { await markTaskAsDone(req, res, next) });

module.exports = router;