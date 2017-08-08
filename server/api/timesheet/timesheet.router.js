import express from 'express';
import controller from './timesheet.controller';

let router = express.Router();

router.get('/', controller.getTimesheet);
router.get('/:id', controller.getTimesheetById);
router.post('/', controller.addTimesheet);
//TODO: Update and delete endpoints
// router.put('/:id', controller.updateTimesheet);
// router.delete('/:id', controller.deleteTimesheet);

export default router;