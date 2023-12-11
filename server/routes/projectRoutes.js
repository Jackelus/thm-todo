import { Router } from "express";
import { createProject, getProjectById, updateProject, deleteProject } from "../controllers/projectController.js";
const projectRouter = Router();

projectRouter.post("/create-project", createProject);
projectRouter.get("/get-project", getProjectById);
projectRouter.put("/update-project", updateProject);
projectRouter.delete("/delete-project", deleteProject);

export default projectRouter;