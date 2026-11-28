// Import Mongoose to handle the MongoDB connection
const mongoose = require('mongoose');

async function connectDatabase() {
  const connectionString = process.env.MONGODB_URL;

  // Stop execution and throw an error if the connection string is not defined
  if (!connectionString) {
    throw new Error('MONGODB_URL is missing from .env');
  }

  await mongoose.connect(connectionString, {
    dbName: 'movieDB',
    serverSelectionTimeoutMS: 10000
  });
// Confirm successful connection
  console.log('Connected to MongoDB Atlas: movieDB');
}

module.exports = connectDatabase;