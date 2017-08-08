import Timesheet from '../../models/timesheet';
import _ from 'lodash';

let TimesheetService = {
    getTimesheet(empId) {
        return Timesheet.find({ 'empId': empId })
            .populate({
                path: 'projectId',
                model: 'Project',
                populate: {
                    path: 'manager',
                    model: 'Employee'
                }
            })
            .populate({
                path: 'activityId',
                model: 'Activity'
            })
            .execAsync();
    },

    getTimesheetById(id) {
        return Timesheet.findById(id).populate({
            path: 'projectId',
            model: 'Project'
        })
            .populate({
                path: 'activityId',
                model: 'Activity'
            })
            .execAsync();
    },

    addTimesheet(logs) {
        let date = logs.date;
        let empId = logs.empId;
        let promises = [];

        _.each(logs.entries, (log) => {
            let timesheet = new Timesheet(log);
            timesheet.date = date;
            timesheet.empId = empId;
            timesheet.status = 'Pending';
            promises.push(Timesheet.createAsync(timesheet));
        });

        return Promise.all(promises);
    }
};

export default TimesheetService;