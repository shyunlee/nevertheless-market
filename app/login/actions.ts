'use server';

import { PASSWORD_MAX_LENGTH, PASSWORD_MIN_LENGTH } from '@/lib/constants';
import { z } from 'zod';

const formSchema = z
  .object({
    email: z.string().email().toLowerCase().trim(),
    password: z
      .string()
      .min(PASSWORD_MIN_LENGTH, 'Password must be at least 8 characters')
      .max(PASSWORD_MAX_LENGTH, 'Password must be less than 24 characters')
      .regex(/[A-Z]/, 'Must include at least one uppercase letter')
      .regex(/[a-z]/, 'Must include at least one lowercase letter')
      .regex(/[0-9]/, 'Must include at least one number')
      .regex(/[^A-Za-z0-9]/, 'Must include at least one special character'),

  });

export const login = async (prevState: any, formData: FormData) => {
  const data = {
    email: formData.get('email'),
    password: formData.get('password'),
  };

  const result = formSchema.safeParse(data);
  if (!result.success) {
    return result.error.flatten();
  }
};