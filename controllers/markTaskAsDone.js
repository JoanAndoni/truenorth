import { completeTask, taskExist } from '../models/task'

export async function markTaskAsDone(req, res, next) {
    const task_uuid = req.body.uuid;

    if (!await taskExist(task_uuid)) {
        res.status(400).send({
            success: false,
            message: `The task with uuid: '${task_uuid}' doesnt exist`
        });
    }

    await completeTask(task_uuid);

    res.status(201).send({
        success: true
    });
}