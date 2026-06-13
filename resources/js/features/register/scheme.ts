import z from 'zod';

export const registerSchema = z
    .object({
        fullName: z
            .string()
            .min(3, { message: 'Full name must be at least 3 characters.' }),
        username: z
            .string()
            .min(4, { message: 'Username must be at least 4 characters.' })
            .max(20, { message: 'Username must be at most 20 characters.' })
            .regex(/^[a-zA-Z0-9_-]+$/, {
                message:
                    'Username can only contain letters, numbers, underscores, and hyphens.',
            }),
        email: z
            .string()
            .email({ message: 'Please enter a valid email address.' }),
        password: z
            .string()
            .min(8, { message: 'Password must be at least 8 characters.' })
            .regex(/[A-Z]/, {
                message: 'Password must contain at least one uppercase letter.',
            })
            .regex(/[a-z]/, {
                message: 'Password must contain at least one lowercase letter.',
            })
            .regex(/[0-9]/, {
                message: 'Password must contain at least one number.',
            }),
        confirmPassword: z.string(),
        acceptTerms: z.boolean().refine((val) => val === true, {
            message: 'You must accept the terms.',
        }),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match.",
        path: ['confirmPassword'],
    });

export type RegisterFormData = z.infer<typeof registerSchema>;
