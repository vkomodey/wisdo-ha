import { Schema, model } from "mongoose";
import { PostStatus } from './constants';

export interface IPost {
  _id: string,
  title: string,
  summary: string,
  body: string,
  bodyLength: number
  author: string,
  country: string,
  community: string,
  likes: number,
  status: PostStatus,
  score: number,
}

const postSchema = new Schema<IPost>({
  _id: {type: String},
  title: {type: String, required: true},
  summary: {type: String, required: true},
  body: {type: String, required: true},
  bodyLength: {type: Number, default: 0},
  author: {type: String, required: true, ref: 'User'},
  country: {type: String, required: true},
  community: {type: String, required: true},
  likes: {type: Number, required: true, default: 0},
  status: {type: String, default: PostStatus.PENDING_APPROVAL, enum: Object.values(PostStatus), required: true},
  score: {type: Number, default: 0, index: true},
}, {timestamps: true});

const PostModel = model<IPost>('Post', postSchema);
export default PostModel;