import express from 'express';

import helloRouter from './api/timesheet/timesheet.router.js';
import projectsRouter from './api/projects/project.router.js';
import activitiesRouter from './api/activity/activity.router.js';

let router = new express.Router();

router.use('/timesheet', helloRouter);
router.use('/project', projectsRouter);
router.use('/activity', activitiesRouter);


export default router;