import express, { Request, Response } from "express";
import dotenv from 'dotenv';
dotenv.config();
import config from './src/config';
import "./src/db";
import { setupApp } from "./src/express";


const app = express();
setupApp(app);

const port = config.apiPort;

app.listen(port, () => { 
  console.log(`Express APP server running at ${port}`);
}).on("error", (error) => {
  throw new Error(error.message);
});
