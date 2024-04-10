import mongoose from "mongoose";
import {IUser} from "./model";
import UserModel from "./model";
import {UserEntity} from "./entity";

class UserRepository {
  constructor(private model: mongoose.Model<IUser>) {
    this.model = model;
  }

  async findById(id: string): Promise<UserEntity | null> {
    const user = await this.model.findById(id);

    if (!user) {
      return null;
    }

    return this.toEntity(user);
  }

  async create(user: UserEntity): Promise<string> {
    const model = new UserModel(user);

    await model.save();

    return model._id;
  }

  toEntity(user: IUser): UserEntity {
    return {
      _id: user._id,
      name: user.name,
      communities: user.communities,
      country: user.country,
      image: user.image,
      email: user.email,
      role: user.role
    }
  }
}
const repo = new UserRepository(UserModel);
export default repo;