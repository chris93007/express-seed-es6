import TimesheetService from './timesheet.service';

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
                res.send(timesheet);
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
                res.send(timesheet);
            })
            .catch(next);
    }
};

export default controller;