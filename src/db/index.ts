import mongoose from "mongoose";

import config from "../config";

function connectDb() {
  const connectionString = `mongodb://${config.mongoHost}:${config.mongoPort}/${config.mongoDbName}`;

  const odm = mongoose.createConnection(connectionString);

  odm.on("connected", () => console.log('MongoDB Connected'));
  odm.on("error", (err) => console.log("MongoDB Connection Error", err));

  return odm;
}

const db = connectDb();

export default db;