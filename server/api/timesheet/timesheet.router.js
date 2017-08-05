import express from 'express';
import controller from './timesheet.controller.js';

let router = express.Router();

router.get('/', controller.getTimesheet);
router.get('/:id', controller.getTimesheetById);
router.post('/', controller.addTimesheet);
router.put('/:id', controller.updateTimesheet);
router.delete('/:id', controller.deleteTimesheet);

export default router;