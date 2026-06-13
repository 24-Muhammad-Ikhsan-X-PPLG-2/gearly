import z from 'zod';

export const LoginScheme = z.object({
    email: z.email('Please enter a valid email address.'),
    password: z.string(),
    remember: z.boolean(),
});

export type LoginSchemeType = z.infer<typeof LoginScheme>;
