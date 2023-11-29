import { faker } from "@faker-js/faker";

import { IThread, IUser } from "../types/threads";

export function createRandomUser(): IUser {
  return {
    id: faker.string.uuid(),
    photo: faker.image.avatar(),
    name: faker.person.fullName(),
    verified: Math.random() >= 0.5,
    bio: faker.person.bio(),
    username: faker.internet.userName(),
    link: faker.internet.url(),
    followers: new Array(Math.floor(Math.random() * 10))
      .fill(null)
      .map(() => createRandomFollower()),
  };
}

export function createRandomFollower(): IUser {
  return {
    id: faker.string.uuid(),
    photo: faker.image.avatar(),
    name: faker.person.fullName(),
    verified: Math.random() >= 0.5,
    bio: faker.person.bio(),
    username: faker.internet.userName(),
    link: faker.internet.url(),
  };
}

export function createRandomThread(): IThread {
  const author = createRandomUser();
  const mentionUser = createRandomUser();

  return {
    id: faker.string.uuid(),
    author,
    content: faker.lorem.paragraph(),
    image: Math.random() > 0.5 ? faker.image.url() : undefined,
    replies: new Array(Math.floor(Math.random() * 10)).fill(null).map(() => ({
      id: faker.string.uuid(),
      author: createRandomUser(),
      content: faker.lorem.sentence(),
      likes: Math.floor(Math.random() * 1000),
      createdAt: faker.date.recent().toISOString(),
    })),
    repliesCount: Math.floor(Math.random() * 100),
    likesCount: Math.floor(Math.random() * 1000),
    mention: Math.random() > 0.5,
    mentionUser,
    createdAt: faker.date.recent().toISOString(),
  };
}

export function generateThreads(): IThread[] {
  return new Array(50).fill(null).map(() => createRandomThread());
}
