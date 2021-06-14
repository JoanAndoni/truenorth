import axios from 'axios';
import { asyncForEach } from '../domain/shared';
import { createTask } from '../domain/task'

export async function retreiveTasksFromAPI(req, res, next) {
    const numberTasks = req.query.noTasks;
    const tasksRetreived = await getTasksFromAPI(numberTasks);
    const tasksCreated = [];

    await asyncForEach(tasksRetreived, async (task) => tasksCreated.push(await createTask(task)));

    res.status(201).send({
        success: true,
        tasksCreated
    });
}

export async function getTasksFromAPI(numberTasks) {
    let tasksFormated = [];
    await axios.get(`https://hipsum.co/api/?type=hipster-centric&sentences=${numberTasks}`)
        .then(response => {
            const tasksRetrieved = response.data[0];
            tasksFormated = tasksRetrieved.split('.');
            tasksFormated = tasksFormated.filter(t => t !== '');
            tasksFormated = tasksFormated.map(t => t.trim());
        }).catch(err => {
            console.error(err);
        });
    return tasksFormated;
}

