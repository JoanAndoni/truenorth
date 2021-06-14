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

module.exports.completeTask = (id, task, callback) => {
    Task.findByIdAndUpdate(id, task, callback);
}