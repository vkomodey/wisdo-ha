import {v4 as uuid} from 'uuid';
import { PostStatus } from './constants';

export interface IPostEntity {
  _id: string,
  title: string,
  summary: string,
  body: string,
  bodyLength: number,
  author: string,
  country: string,
  community: string,
  likes: number,
  status: PostStatus
}

export class PostEntity implements IPostEntity {
  _id: string;
  title: string;
  summary: string;
  body: string;
  bodyLength: number;
  author: string;
  country: string;
  community: string;
  likes: number;
  status: PostStatus;

  // constructor(name: string, communities: string[], country: string, role: UserRoles, id?: string, email?: string, image?: string) {
  constructor({id, title, summary, body, author, country, community, likes=0, status=PostStatus.PENDING_APPROVAL}:
    {id?: string, title: string, summary: string, body: string, author: string, country: string, community: string, likes?: number, status?: PostStatus}
  ) {
    this._id = id ? id : uuid();
    this.title = title;
    this.summary = summary;
    if (!body) {
      const firstWords = summary.split(" ").slice(0, 150);
      this.body = firstWords.join(" ");
    } else {
      this.body = body;
    }
    this.bodyLength = body.length;
    this.author = author;
    this.country = country;
    this.community = community;
    this.likes = likes;
    this.status = status;
  }
}