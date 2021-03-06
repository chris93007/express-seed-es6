import mongoose from 'mongoose';

let Schema = mongoose.Schema;
let Promise = require('bluebird');

let possibleStatus = ['Pending', 'Approved'];

let TimesheetSchema = new Schema({ empId: String, date: Date, entries: [{ projectId: { type: Schema.ObjectId, ref: 'Project' }, workLog: Number, activityId: { type: Schema.ObjectId, ref: 'Project' } }], status: { type: String, enum: possibleStatus } }, { collection: 'timesheets' });

let Timesheet = mongoose.model('Timesheet', TimesheetSchema);
Promise.promisifyAll(Timesheet);
Promise.promisifyAll(Timesheet.prototype);

export default Timesheet;