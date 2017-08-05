import TimesheetService from './timesheet.service.js';
import url from 'url';

let controller = {
    getTimesheet(req, res, next) {
        let empId = req.query.empId;

        TimesheetService.getTimesheet(empId)
            .then(timesheet => {
                res.status(200);
                res.send({ timesheets: [timesheet] });
             })
            .catch(next);
    },

    getTimesheetById(req, res, next) {
        TimesheetService.getTimesheetById(req.params.id)
            .then(timesheet => {
                res.status(200);
                res.send( timesheet );
             })
            .catch(next);
    },

    addTimesheet(req, res, next) {
        let logs = {
            date: req.body.date,
            empId: req.body.empId,
            entries: req.body.entries
        };

        TimesheetService.addTimesheet(logs)
            .then(timesheet => {
                res.status(201);
                res.send( timesheet );
             })
            .catch(next);
    },

    updateTimesheet(req, res, next) {
        TimesheetService.updateTimesheet(req.params.id)
            .then(timesheet => {
                res.status(200);
                res.send( timesheet );
             })
            .catch(next);
    },

    deleteTimesheet(req, res, next) {
        TimesheetService.deleteTimesheet(req.params.id)
            .then(timesheet => {
                res.status(200);
                res.send({});
            })
            .catch(next);
    },

    getTimesheetForEmp(req, res, next) {
        let url_parts = url.parse(request.url, true);
        let query = url_parts.query;

        TimesheetService.getTimesheetForEmp(req.query.empId)
            .then(timesheet => {
                res.status(200);
                res.send({ timesheets: timesheet });
            })
            .catch(next);
    }
};

export default controller;