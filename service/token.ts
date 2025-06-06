import db from '@/lib/db';
import crypto from 'crypto';
import { findUserByPhone } from './user';

type TokenDataSelectOption = {
  id?: boolean;
  token?: boolean;
  user?: boolean;
  userId?: boolean;
};

export async function findToken(token: string, select?: TokenDataSelectOption) {
  return await db.tokenSMS.findUnique({
    where: {
      token,
    },
    select,
  });
}

export async function deleteTokenForPhone(phone: string) {
  return await db.tokenSMS.deleteMany({
    where: {
      user: {
        phone: {
          endsWith: phone
        }
      },
    },
  });
}

export async function deleteToken(id: number) {
  return await db.tokenSMS.delete({
    where: {
      id
    }
  })
}

export async function getToken() {
  const token = crypto.randomInt(100000, 999999).toString();
  const isExist = await findToken(token, { id: true });
  if (isExist) {
    return getToken();
  } else {
    return token;
  }
}

export async function createOrSaveUserWithSmsToken(token: string, phone: string) {
  const phoneNumberMatched = await findUserByPhone(phone, {phone: true});
  return await db.tokenSMS.create({
    data: {
      token,
      user: {
        connectOrCreate: {
          where: {
            phone: phoneNumberMatched ? phoneNumberMatched.phone! : phone
          },
          create: {
            username: crypto.randomBytes(10).toString('hex'),
            phone
          }
        }
      }
    }
  })
}
