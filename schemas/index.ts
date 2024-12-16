import { z } from "zod";

export const signinSchema = z.object({
    email: z.string().email().min(1, "Please enter your email address"),
    password: z.string().min(1, "Please enter your password")
})

export const signupSchema = z.object({
    country: z.string().min(1, "Please enter your country name"),
    email: z.string().email(),
    password: z.string()
    .min(8)
    .max(15)
    .regex(/[A-Z]/, { message: 'At least one uppercase letter' })
    .regex(/[a-z]/, { message: 'At least one lowercase letter' })
    .regex(/[0-9]/, { message: 'At least one number' })
    .regex(/[!@#$%^&*(),.?":{}|<>]/, { message: 'At least one special character' })
})