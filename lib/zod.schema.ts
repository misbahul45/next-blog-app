import * as z from "zod";

export const SignUpFormSchema = z.object({
    username: z.string(),
    email: z.string().email(),
    password: z.string().min(8),
    confirmPassword: z.string().min(8)
}).refine(
    (data) => data.password === data.confirmPassword,
    { 
        message: "Passwords do not match" 
    }
);

export const SignInSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8)
})


export const CreatePostSchema=z.object({
    title:z.string(),
    desc:z.string()
})
