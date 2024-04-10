import { Request } from 'express';
import logger from '../../utils/logger';
import mongoose from 'mongoose';
import User from './model';

class Controller {
  async createUser(req: Request) {
    const body = req.body;
    const user = new User({
      name: body.name,
      email: body.email,
      role: 'regular',
      communities: [new mongoose.Types.ObjectId('4edd40c86762e0fb12000003')],
      image: body.image,
      country: body.country
    });

    logger.info('Request is here');

    await user.save();

    return user.toJSON();
  }
}

export default new Controller();
