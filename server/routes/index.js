import { Router } from 'express';
import projectRouter from './projectRoutes.js';

const router = Router();
router.use('/project', projectRouter);


export default router;
