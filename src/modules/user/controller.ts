import { Request } from 'express';
import userRepository from './repository';
import {UserEntity} from './entity';

class Controller {
  private repository = userRepository;
  async createUser(req: Request) {
    const user = new UserEntity(req.body);

    const id = await this.repository.create(user);

    return {id};
  }
}

export default new Controller();
