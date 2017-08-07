import mongoose from 'mongoose';

let Schema = mongoose.Schema;
let Promise = require('bluebird');

let ActivitySchema = new Schema({ name: String }, { collection: 'activities' });

let Activity = mongoose.model('Activity', ActivitySchema);
Promise.promisifyAll(Activity);
Promise.promisifyAll(Activity.prototype);

export default Activity;


