import { Schema, model } from 'mongoose';

const projectSchema = new Schema({
    name: {
        type: String,
        required: true
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
        default: Date.now
    },
    tasks: [{
        type: Array,
        ref: 'Task',
        default: []
    }]
});

const Project = model('Project', projectSchema);

export default Project;

