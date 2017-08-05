import mongoose from 'mongoose';

let Schema = mongoose.Schema;
let Promise = require('bluebird');

let ProjectSchema = new Schema({ projectId: String, name: String, manager: String, team: [] }, { collection: 'projects' });

let Project = mongoose.model('Project', ProjectSchema);
Promise.promisifyAll(Project);
Promise.promisifyAll(Project.prototype);

export default Project;

