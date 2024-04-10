import express from 'express';
import morgan from 'morgan';

import {router as userRouter} from './modules/user/router';
import {router as postRouter} from './modules/post/router';
import {router as communityRouter} from './modules/community/router';

import authMiddleware from './middlewares/authenticate.middleware';
import updateScore from './jobs/score.job';

export function setupApp(app: express.Application) {
  app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
  app.use(express.json());
  const router = express.Router();

  router.use(authMiddleware);
  router.use('/user', userRouter);
  router.use('/post', postRouter);
  router.use('/community', communityRouter);
  // test run. should use cron instead
  updateScore().then(() => console.log('Jobs score has been updated'));

  app.use(router);
}