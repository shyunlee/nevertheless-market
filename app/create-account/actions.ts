'use server';

import { PASSWORD_MAX_LENGTH, PASSWORD_MIN_LENGTH, USERNAME_MAX_LENGTH, USERNAME_MIN_LENGTH } from '@/lib/constants';
import db from '@/lib/db';
import { z } from 'zod';
import bcrypt from 'bcrypt';
import { getIronSession, IronSession } from 'iron-session';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const isExistByUsername = async (username: string) => {
  const user = await db.user.findUnique({
    where: {
      username
    },
    select: {
      id: true
    }
  })
  return !Boolean(user)
}

const isExistByEmail = async (email: string) => {
  const user = await db.user.findUnique({
    where: {
      email
    },
    select: {
      id: true
    }
  })
  return !Boolean(user)
}

const formSchema = z
  .object({
    username: z
      .string({ required_error: 'Username is required' })
      .min(USERNAME_MIN_LENGTH, 'Username must be at least 3 charanters')
      .max(USERNAME_MAX_LENGTH, 'Username should not exceed 15 characters')
      .regex(/[A-Za-z]/, 'Must include at least one character')
      .toLowerCase()
      .trim()
      .refine(isExistByUsername, 'This username is already taken'),
    email: z.string().email().toLowerCase().trim().refine(isExistByEmail, 'There is an account already registered with this email'),
    password: z
      .string()
      .min(PASSWORD_MIN_LENGTH, 'Password must be at least 8 characters')
      .max(PASSWORD_MAX_LENGTH, 'Password must be less than 24 characters')
      .regex(/[A-Z]/, 'Must include at least one uppercase letter')
      .regex(/[a-z]/, 'Must include at least one lowercase letter')
      .regex(/[0-9]/, 'Must include at least one number')
      .regex(/[^A-Za-z0-9]/, 'Must include at least one special character'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });


  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const createAccount = async (_: any, formData: FormData) => {
  const data = {
    username: formData.get('username'),
    email: formData.get('email'),
    password: formData.get('password'),
    confirmPassword: formData.get('confirmPassword'),
  };

  const result = await formSchema.safeParseAsync(data);
  if (!result.success) {
    return result.error.flatten();
  } else {
    const {username, email, password} = result.data
    const hashedPassword = await bcrypt.hash(password, 12)
    const user = await db.user.create({
      data: {
        username,
        email,
        password: hashedPassword
      },
      select: {
        id: true
      }
    })

    const session = await getIronSession(await cookies(), {
      cookieName: 'user-auth',
      password: process.env.SESSION_SECRET!
    })

    session.id = user.id
    await session.save();
    redirect('/profile')
  }
};
