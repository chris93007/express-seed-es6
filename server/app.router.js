import express from 'express';

import timesheetRouter from './api/timesheet/timesheet.router';
import projectsRouter from './api/projects/project.router';
import activitiesRouter from './api/activity/activity.router';
import employeesRouter from './api/employee/employee.router';


let router = new express.Router();

router.use('/timesheet', timesheetRouter);
router.use('/employee', employeesRouter);
router.use('/project', projectsRouter);
router.use('/activity', activitiesRouter);


export default router;