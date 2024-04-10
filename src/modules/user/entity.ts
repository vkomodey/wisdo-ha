import {v4 as uuid} from 'uuid';
import { UserRoles } from "./constants";

export interface IUserEntity {
  _id: string;
  name: string;
  email?: string;
  image?: string;
  communities: string[];
  country: string;
  role: UserRoles
}

export class UserEntity implements IUserEntity {
  _id: string;
  name: string;
  email?: string;
  image?: string;
  communities: string[];
  country: string;
  role: UserRoles;

  // constructor(name: string, communities: string[], country: string, role: UserRoles, id?: string, email?: string, image?: string) {
  constructor({name, communities, country, role, id, email, image}:
    {name: string, communities: string[], country: string, role: UserRoles, id?: string, email?: string, image?: string}
  ) {

    this.name = name;
    this.communities = communities;
    this.role = role;
    this._id = id ? id : uuid();
    this.email = email;
    this.country = country;
    this.image = image;
  }
}