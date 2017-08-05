import mongoose from 'mongoose';

let Schema = mongoose.Schema;
let Promise = require('bluebird');

let TimesheetSchema = new Schema({ empId: String, projectId: String, date: Date, workLog: Number, activityId: String, status: String }, { collection: 'timesheets' });

let Timesheet = mongoose.model('Timesheet', TimesheetSchema);
Promise.promisifyAll(Timesheet);
Promise.promisifyAll(Timesheet.prototype);

export default Timesheet;