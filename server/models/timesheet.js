import mongoose from 'mongoose';

let Schema = mongoose.Schema;
let Promise = require('bluebird');

let possibleStatus = ['Pending', 'Approved'];

let TimesheetSchema = new Schema({ empId: String, projectId: { type: ObjectId, ref: 'Project' }, date: Date, workLog: Number, activityId: { type: ObjectId, ref: 'Project' }, status: { type: String, enum: possibleStatus } }, { collection: 'timesheets' });

let Timesheet = mongoose.model('Timesheet', TimesheetSchema);
Promise.promisifyAll(Timesheet);
Promise.promisifyAll(Timesheet.prototype);

export default Timesheet;