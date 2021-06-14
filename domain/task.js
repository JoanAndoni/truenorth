import Task from '../models/task';
import { v4 as uuidv4 } from 'uuid';

export async function createTask(title) {
    const newTask = new Task({
        title,
        uuid: uuidv4(),
        done: false
    });

    console.log(`Creating new task with uuid: '${newTask.uuid}'`);

    await Task.addTask(newTask, async (err, task) => {
        if (err) {
            res.status(500).json({
                success: false,
                msg: `Task with uuid: '${newTask.uuid}' couldn't be created`
            });
        } else if (task) {
            console.log(`Task with uuid: '${newTask.uuid}' created`);
        }
    });

    return newTask.uuid;
}