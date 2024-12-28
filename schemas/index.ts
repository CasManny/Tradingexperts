import { z } from "zod";

export const signinSchema = z.object({
    email: z.string().email().min(1, "Please enter your email address"),
    password: z.string().min(1, "Please enter your password")
})

export const verifySchema = z.object({
    email: z.string(),
    securityCode: z.string().min(4)
})

export const signupSchema = z.object({
    username: z.string(),
    fullName: z.string(),
    phone: z.string(),
    country: z.string().min(1, "Please enter your country name"),
    email: z.string().email(),
    password: z.string().min(5)
    .max(25)
})