import mongoose from 'mongoose';

let Schema = mongoose.Schema;
let Promise = require('bluebird');

//TODO: team - should be objectId's of employees
let EmployeeSchema = new Schema({ empId: String, name: String, manager: { type : ObjectId, ref: 'Employee' } }, { collection: 'employees' });

let Employee = mongoose.model('Employee', EmployeeSchema);
Promise.promisifyAll(Employee);
Promise.promisifyAll(Employee.prototype);

export default Employee;

