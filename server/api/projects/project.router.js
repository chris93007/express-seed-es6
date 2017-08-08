import express from 'express';
import controller from './project.controller';

let router = express.Router();

router.get('/', controller.getProject);
router.get('/:id', controller.getProjectById);
router.post('/', controller.addProject);

//TODO: Update and delete endpoints

export default router;