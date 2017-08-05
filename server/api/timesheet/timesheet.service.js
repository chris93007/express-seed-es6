import Timesheet from '../../models/timesheet.js';
import _ from 'lodash';

let TimesheetService = {
    getTimesheet(empId) {
        return Timesheet.findAsync({ 'empId': empId });
    },

    getTimesheetById(id) {
        return Timesheet.findByIdAsync(id);
    },

    addTimesheet(logs) {
        let date = logs.date;
        let empId = logs.empId;
        let promises = [];

        _.each(logs.entries, (l) => {
            let timesheet = new Timesheet(l);
            timesheet.date = date;
            timesheet.empId = empId;
            timesheet.status = 'Pending';
            promises.push(Timesheet.createAsync(timesheet));
        });

        return Promise.all(promises);
    }
};

export default TimesheetService;