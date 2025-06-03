import db from '@/lib/db';

type UserDataSelectOption = {
  id?: boolean;
  password?: boolean;
}

type CreateNewUser = {
  username: string,
  email?: string,
  password?: string,
  phone?: string,
  github_id?: string,
  avatar?: string,
}


export async function findUniqUserByEmail(email: string, select?: UserDataSelectOption) {
  return await db.user.findUnique({
    where: {
      email
    },
    select
  })
}

export async function findUniqUserByUsername(username: string, select?: UserDataSelectOption) {
  return await db.user.findUnique({
    where: {
      username
    },
    select
  })
}

export async function findUniqUserByid(id: number) {
  return await db.user.findUnique({
    where: {
      id
    },
  })
}

export async function createNewUser(user: CreateNewUser) {
  const existingUser = await findUniqUserByUsername(user.username, {id: true});
  if (existingUser) {
    return existingUser;
  }
  return await db.user.create({
    data: user,
    select: {
      id: true
    }
  })
}