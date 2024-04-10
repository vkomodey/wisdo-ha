import mongoose from "mongoose";

import config from "../config";

async function connectDb() {
  const connectionString = `mongodb://${config.mongoHost}:${config.mongoPort}/${config.mongoDbName}`;

  try {
    await mongoose.connect(connectionString);
  } catch(err) {
    console.log('MongoDB is not connected', err);
  }

  console.log(`MongoDB is successfuly connected to the ${config.mongoHost}:${config.mongoPort}`);
}

const db = connectDb();

export default db;