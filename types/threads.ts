export interface IThread {
  id: string;
  author: IUser;
  content: string;
  image?: string;
  replies?: IReply[];
  repliesCount: number;
  likesCount: number;
  mention?: boolean;
  mentionUser?: IUser;
  createdAt: string;
}

export interface IReply {
  id: string;
  author: IUser;
  content: string;
  likes: number;
  createdAt: string;
}

export interface IUser {
  id: string;
  name: string;
  username: string;
  verified: boolean;
  photo: string;
  bio: string;
  link?: string;
  followers?: IUser[];
}
