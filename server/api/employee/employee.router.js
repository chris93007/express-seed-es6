import express from 'express';
import controller from './employee.controller';

let router = express.Router();

router.get('/', controller.getEmployee);
router.post('/', controller.addEmployee);
//TODO: Update and delete endpoints
// router.put('/:id', controller.updateActivity);
// router.delete('/:id', controller.deleteActivity);

export default router;