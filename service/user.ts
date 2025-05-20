import db from '@/lib/db';

type UserDataSelectOption = {
  id?: boolean;
  password?: boolean;
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
