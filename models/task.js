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

