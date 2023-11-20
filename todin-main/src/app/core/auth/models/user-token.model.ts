import { User } from "./user.model";

export interface UserToken {
  user: User;
  token: string;
}