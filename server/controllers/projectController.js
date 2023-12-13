// Import any necessary modules or dependencies
import Project from "../models/project.js";


export const createProject = async (req, res) => {
    try {
        const newProject = await Project.create({name: req.body.name,
            notes: req.body.notes});
        res.status(201).json(newProject);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.status(200).json(projects);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const getProjectByName = async (req, res) => {
    try {
        const project = await Project.findOne({ name: req.query.name }).exec();
        res.status(200).json(project);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// TODO: here, need to add taks to current tasks
export const updateProject = async (req, res) => {
    try {

        const project = await Project.findById(req.query.projectId).exec();
        if (!project) return res.status(404).json({ message: 'Project not found' });
        if (req.body.name) project.name = req.body.name;
        if (req.body.notes) project.notes = req.body.notes;
        if (req.body.progress) project.progress = req.body.progress;
        if (req.body.tags) project.tags = req.body.tags;
        if (req.body.task) {
            const foundTaskIndex = project.tasks.findIndex(task => task._id === req.body.task._id);
            if (foundTaskIndex === -1) {
                project.tasks = [...project.tasks, {
                    taskName: req.body.task.taskName,
                    taskStatus: req.body.task.taskStatus,
                    dueDate: req.body.task.dueDate
                }];
            } else {
                project.tasks[foundTaskIndex] = req.body.task;

            }
        }
        const updatedProject = await project.save();
        res.status(200).json(updatedProject);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteProject = async (req, res) => {
    try {
        const project = await Project.findById(req.query.id);
        await project.remove();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteTask = async (req, res) => {
    try {
        const project = await Project.findById(req.query.projectId).exec();
        if (!project) return res.status(404).json({ message: 'Project not found' });
        project.tasks = project.tasks.filter(task => task._id !== req.query.taskId);
        const updatedProject = await project.save();
        res.status(200).json(updatedProject);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


