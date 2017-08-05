import express from 'express';
import controller from './project.controller.js';

let router = express.Router();

router.get('/', controller.getProject);
router.get('/:id', controller.getProjectById);
router.post('/', controller.addProject);
router.put('/:id', controller.updateProject);
router.delete('/:id', controller.deleteProject);

export default router;