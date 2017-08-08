import mongoose from 'mongoose';

let Schema = mongoose.Schema;
let Promise = require('bluebird');

let EmployeeSchema = new Schema({ empId: String, name: String, manager: { type : Schema.ObjectId, ref: 'Employee' } }, { collection: 'employees' });

let Employee = mongoose.model('Employee', EmployeeSchema);
Promise.promisifyAll(Employee);
Promise.promisifyAll(Employee.prototype);

export default Employee;