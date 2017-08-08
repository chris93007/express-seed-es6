import mongoose from 'mongoose';

let Schema = mongoose.Schema;
let Promise = require('bluebird');

let ProjectSchema = new Schema({ name: String, manager: { type : Schema.ObjectId, ref: 'Employee' }, team: [{ type : Schema.ObjectId, ref: 'Employee' }] }, { collection: 'projects' });

let Project = mongoose.model('Project', ProjectSchema);

Promise.promisifyAll(Project);
Promise.promisifyAll(Project.prototype);

export default Project;