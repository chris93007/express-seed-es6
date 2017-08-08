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

        let timesheet = new Timesheet(logs);
        timesheet.status = 'Pending';

        return Timesheet.createAsync(timesheet)
            .then((timesheet) => {
                return Timesheet.find(timesheet)
                    .populate({
                        path: 'entries.projectId',
                        model: 'Project'
                    })
                    .populate({
                        path: 'entries.activityId',
                        model: 'Activity'
                    })
                    .execAsync();
            });
    }
};

export default TimesheetService;