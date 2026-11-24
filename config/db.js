const mongoose = require('mongoose');

async function connectDatabase() {
  const connectionString = process.env.MONGODB_URL;

  if (!connectionString) {
    throw new Error('MONGODB_URL is missing from .env');
  }

  await mongoose.connect(connectionString, {
    dbName: 'movieDB',
    serverSelectionTimeoutMS: 10000
  });

  console.log('Connected to MongoDB Atlas: movieDB');
}

module.exports = connectDatabase;