import { ObjectId, Schema, model } from "mongoose";
import mongoose from "mongoose";
import { UserRoles } from "./constants";

interface IUser {
  name: string;
  role: UserRoles;
  image?: string;
  email?: string;
  country: string;
  communities: ObjectId[];
}

const userSchema = new Schema<IUser>({
  name: {type: String, required: true},
  role: {type: String, default: UserRoles.REGULAR, enum: Object.values(UserRoles), required: true},
  image: {type: String, required: false},
  email: {type: String, required: false},
  country: {type: String, required: true},
  communities: [mongoose.Types.ObjectId]
});

const User = model<IUser>('User', userSchema);

export default User;