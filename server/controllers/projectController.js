// Import any necessary modules or dependencies
import Project from "../models/project.js";


export const createProject = async (req, res) => {
    try {
        const project = await new Project({
            name: req.body.name,
            notes: req.body.notes,
            progress: req.body.progress,
            tags: req.body.tags,
            tasks: req.body.tasks
        });
        const newProject = await project.save();
        res.status(201).json(newProject);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getProjectById = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        res.status(200).json(project);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};


export const updateProject = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        project.name = req.body.name;
        project.notes = req.body.notes;
        project.progress = req.body.progress;
        project.tags = req.body.tags;
        project.tasks = req.body.tasks;
        const updatedProject = await project.save();
        res.status(200).json(updatedProject);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteProject = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        await project.remove();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// const projectController = {
//     createProject,
//     getProjectById,
//     updateProject,
//     deleteProject
// };

// export default projectController;
