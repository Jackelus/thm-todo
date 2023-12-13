import mongoose, { Schema, model } from 'mongoose';

const projectSchema = new Schema({
    name: {
        type: String,
    },
    notes: {
        type: String,
    },
    progress: {
        type: Number,
    },
    tags: {
        type: Array,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    tasks: [{
        _id: {

            type: String,
            default: () => new mongoose.Types.ObjectId().toString(),
        },
        taskName: {
            type: String,
        },
        taskStatus: {
            type: String,
        },
        dueDate: {
            type: Date,
        }

    }]
})


const Project = model('Project', projectSchema);

export default Project;

