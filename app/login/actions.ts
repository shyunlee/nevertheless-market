'use server';

import { PASSWORD_MAX_LENGTH, PASSWORD_MIN_LENGTH } from '@/lib/constants';
import { getSession } from '@/lib/session';
import { findUniqUserByEmail } from '@/service/user';
import bcrypt from 'bcrypt';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const isUserExistByEmail = async (email: string) => {
  const user = await findUniqUserByEmail(email, {id: true})
  return Boolean(user)
}

const formSchema = z
  .object({
    email: z.string().email().toLowerCase().trim().refine(isUserExistByEmail, "A user with the email doesn't exist"),
    password: z
      .string()
      .min(PASSWORD_MIN_LENGTH, 'Password must be at least 8 characters')
      .max(PASSWORD_MAX_LENGTH, 'Password must be less than 24 characters')
      .regex(/[A-Z]/, 'Must include at least one uppercase letter')
      .regex(/[a-z]/, 'Must include at least one lowercase letter')
      .regex(/[0-9]/, 'Must include at least one number')
      .regex(/[^A-Za-z0-9]/, 'Must include at least one special character'),

  });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const login = async (_: any, formData: FormData) => {
  const data = {
    email: formData.get('email'),
    password: formData.get('password'),
  };

  const result = formSchema.safeParse(data);
  if (!result.success) {
    return result.error.flatten();
  } else {
    const { email, password } = result.data;
    const user = await findUniqUserByEmail(email, {password: true})
    const isPasswordCorrect = await bcrypt.compare(password, user!.password ?? '')
    if (isPasswordCorrect) {
      const session = await getSession();
      session.id = user!.id;
      redirect('/profile')
    } else {
      return {fieldErrors: {
        password: ['Password incorrect'],
        email: []
      }}
    }
  }
};