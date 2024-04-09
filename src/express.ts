import express from 'express';
import morgan from 'morgan';

export function setupApp(app: express.Application) {
  app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
}