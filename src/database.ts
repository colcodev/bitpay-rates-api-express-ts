import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})
  .then(db => console.log('Database is conencted'))
  .catch(err => console.log(err));