import { Schema, model } from "mongoose";
import { UserRoles } from "./constants";

export interface IUser {
  _id: string,
  name: string;
  role: UserRoles;
  image?: string;
  email?: string;
  country: string;
  communities: string[];
}

const userSchema = new Schema<IUser>({
  _id: {type: String},
  name: {type: String, required: true},
  role: {type: String, default: UserRoles.REGULAR, enum: Object.values(UserRoles), required: true},
  image: {type: String, required: false},
  email: {type: String, required: false},
  country: {type: String, required: true},
  communities: [String]
});

const UserModel = model<IUser>('User', userSchema);
export default UserModel;