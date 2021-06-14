import { getTasksFromDB } from '../models/task'

export async function getTasks(req, res, next) {
    const numberTasksFromPetition = Number(req.query.noTasks);

    const tasks = await getTasksFromDB(numberTasksFromPetition);

    res.status(201).send({
        success: true,
        tasks
    });
}