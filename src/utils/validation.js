import { z } from 'zod';

export const signupSchema = z
  .object({
    name: z
      .string()
      .min(3, { message: 'Name must be at least 3 characters long' }),

    email: z.string().email({ message: 'Invalid email address' }),

    password: z
      .string()
      .min(6, { message: 'Password must be at least 6 characters long' }),

    confirmPassword: z
      .string()
      .min(6, { message: 'Please confirm your password' }),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export const loginSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});
