'use server';

import { z } from 'zod';

const formSchema = z.object({
  username: z.string().min(3, 'Username must be at least 3 charanters').max(15, 'Username should not exceed 15 characters'),
  email: z.string().email(),
  password: z
  .string()
  .min(8, 'Password must be at least 8 characters')
  .max(24, 'Password must be less than 24 characters')
  .regex(/[A-Z]/, 'Must include at least one uppercase letter')
  .regex(/[a-z]/, 'Must include at least one lowercase letter')
  .regex(/[0-9]/, 'Must include at least one number')
  .regex(/[^A-Za-z0-9]/, 'Must include at least one special character'),
  confirmPassword: z.string() 
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
})

export const handleFormSubmit = async (
  prevState: any,
  formData: FormData
) => {
  const data = {
    username: formData.get('username'),
    email: formData.get('email'),
    password: formData.get('password'),
    confirmPassword: formData.get('confirmPassword')
  }

  const result = formSchema.safeParse(data)
  if(!result.success) {
    return result.error.flatten()
  }
};
