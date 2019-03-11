import mongoose from 'mongoose';

const options = { useMongoClient: true, server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
  replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };
const mongodbUri = 'mongodb://writer:Qwerty11@ds147225.mlab.com:47225/champs';


mongoose.connect(mongodbUri, options);
const conn = mongoose.connection;


const Schema = new mongoose.Schema({
  id : String,
  name : String,
  leagues : Array,
  sponsor: String,
  banner: String,
  website: String,
  createdDate: Date,
});


const Model = mongoose.model('tournaments',Schema);
conn.on('error', console.error.bind(console, 'connection error:'));


export default { 
  get: (cb) => Model.find((err, data) => cb(err, data))
};
