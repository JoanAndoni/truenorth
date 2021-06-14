import mongoose from "mongoose";

const TaskSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    uuid: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        required: false
    }
})

const Task = module.exports = mongoose.model('Task', TaskSchema)

module.exports.addTask = async (newTask, callback) => {
    await newTask.save(callback);
}

module.exports.taskExist = async (uuid) => {
    return await Task.exists({ uuid });
}

module.exports.getTasksFromDB = async (noTasks) => {
    return await Task.find({}, { _id: 0, __v: 0 }).limit(noTasks);
}

module.exports.completeTask = async (uuid) => {
    return await Task.updateOne(
        { uuid },
        { done: true }
    );
}