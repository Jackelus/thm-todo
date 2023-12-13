import { Router } from "express";
import { createProject, getProjectByName, updateProject, deleteProject, getProjects, deleteTask } from "../controllers/projectController.js";
const projectRouter = Router();

projectRouter.post("/create-project", createProject);
projectRouter.get("/get-project", getProjectByName);
projectRouter.get("/get-projects", getProjects);
projectRouter.put("/update-project", updateProject);
projectRouter.delete("/delete-project", deleteProject);
projectRouter.delete("/delete-task", deleteTask);

export default projectRouter;