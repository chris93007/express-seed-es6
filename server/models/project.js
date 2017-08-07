import mongoose from 'mongoose';

let Schema = mongoose.Schema;
let Promise = require('bluebird');

//TODO: team - should be objectId's of employees
let ProjectSchema = new Schema({ name: String, manager: String, team: [{ type : ObjectId, ref: 'Employee' }] }, { collection: 'projects' });

let Project = mongoose.model('Project', ProjectSchema);
Promise.promisifyAll(Project);
Promise.promisifyAll(Project.prototype);

export default Project;

